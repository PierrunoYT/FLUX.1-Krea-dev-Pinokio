# xformers compatibility issue with newer triton versions

## Description
xformers fails to import when used with newer versions of triton due to API changes in triton's JIT compilation system.

## Error
```
AttributeError: Cannot set attribute 'src' directly. Use '_unsafe_update_src()' and manually clear `.hash` of all callersinstead.
```

## Full Traceback
```
Traceback (most recent call last):
  File "D:\pinokio\api\FLUX.1-Krea-dev-Pinokio.git\app\env\lib\site-packages\xformers\triton\vararg_kernel.py", line 244, in unroll_varargs
    jitted_fn.src = new_src
  File "D:\pinokio\api\FLUX.1-Krea-dev-Pinokio.git\app\env\lib\site-packages\triton\runtime\jit.py", line 754, in __setattr__
    raise AttributeError(f"Cannot set attribute '{name}' directly. "
AttributeError: Cannot set attribute 'src' directly. Use '_unsafe_update_src()' and manually clear `.hash` of all callersinstead.
```

## Environment
- **OS**: Windows 10 (26100.4652)
- **Python**: 3.10+ (conda environment)
- **xformers**: Latest version from PyPI
- **triton**: Latest triton-windows version
- **PyTorch**: 2.7.0 with CUDA 12.4

## Steps to Reproduce
1. Install xformers and triton-windows in the same environment
2. Try to import xformers: `import xformers.ops`
3. Error occurs during module initialization

## Root Cause
The issue is in `xformers/triton/vararg_kernel.py` line 244:
```python
jitted_fn.src = new_src  # This line fails
```

Triton's API has changed and now requires using `_unsafe_update_src()` method instead of directly setting the `src` attribute.

## Suggested Fix
Replace the direct attribute assignment:
```python
# Old (broken)
jitted_fn.src = new_src

# New (should work)
jitted_fn._unsafe_update_src(new_src)
jitted_fn.hash = None  # Clear hash as mentioned in error message
```

## Impact
This prevents xformers from working with newer triton versions, affecting many deep learning workflows that depend on both libraries for memory-efficient attention mechanisms.

## Workaround
For now, users need to either:
1. Disable triton installation when using xformers
2. Use older triton versions that still support direct `src` attribute assignment
3. Use xformers without triton optimizations
