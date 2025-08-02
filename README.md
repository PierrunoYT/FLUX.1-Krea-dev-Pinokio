# FLUX.1-Krea-dev Pinokio Package

A complete Pinokio installation package for running FLUX.1-Krea-dev locally with a beautiful Gradio web interface for advanced text-to-image generation.

## 🚀 Features

- **🎨 FLUX.1-Krea-dev Model**: Black Forest Labs' state-of-the-art text-to-image diffusion model
- **🖼️ High-Quality Generation**: 12 billion parameter rectified flow transformer for stunning images
- **✨ Krea Enhancement**: Further tuned and customized with Krea for improved aesthetic quality
- **💬 Gradio Interface**: Clean, professional web interface for image generation
- **⚡ GPU Acceleration**: Automatic CUDA/DirectML/ROCm support when available
- **🔒 Complete Privacy**: Runs entirely offline, no data sent externally
- **🌐 Cross-Platform**: Windows, macOS, and Linux support
- **🎛️ Advanced Controls**: Customizable guidance scale, inference steps, and image dimensions

## 📋 Requirements

- **RAM**: 8GB+ (16GB+ recommended for optimal performance)
- **Storage**: ~12GB for model files (downloaded automatically)
- **GPU**: Highly recommended (8GB+ VRAM for best performance)
- **OS**: Windows 10/11, macOS, or Linux
- **Python**: 3.9+ (handled automatically in virtual environment)

## 🛠️ Installation

### Via Pinokio (Recommended)

1. Install [Pinokio](https://pinokio.computer/)
2. Open Pinokio and navigate to "Discover"
3. Search for "FLUX.1-Krea-dev" or paste this repository URL
4. Click "Install" and wait for the installation to complete
5. Click "Start" to launch FLUX.1-Krea-dev
6. Open the web interface when it becomes available

### Manual Installation

1. Clone this repository:
   ```bash
   git clone <your-repository-url>
   cd FLUX.1-Krea-dev
   ```

2. Install Pinokio and run the installation script through the Pinokio interface

## 🎯 Usage

1. **Start the Application**: Click "Start" in Pinokio
2. **Open Web Interface**: Click "Open Web UI" when available
3. **Enter Prompt**: Type your text description for image generation
4. **Customize Settings**: Adjust guidance scale, steps, and dimensions
5. **Generate**: Click "Run" to create your image
6. **Advanced Features**:
   - Randomize seed for varied outputs
   - Custom image dimensions (up to 2048x2048)
   - Adjustable guidance scale (1-15)
   - Variable inference steps (1-50)

## 🏗️ Project Structure

```
FLUX.1-Krea-dev-Pinokio/
├── pinokio.js              # Main Pinokio configuration
├── install.js              # Installation workflow
├── start.js                # Application startup
├── update.js               # Update workflow
├── reset.js                # Reset/cleanup workflow
├── link.js                 # Deduplication workflow
├── torch.js                # PyTorch installation
├── README.md               # This file
└── app/                    # Created during installation
    ├── env/                # Python virtual environment
    ├── app.py              # Main Gradio application
    ├── live_preview_helpers.py # Live preview functionality
    ├── requirements.txt    # Python dependencies
    └── models/             # Downloaded model files (auto-cached)
```

## 🔧 Technical Details

### Model Information
- **Model**: black-forest-labs/FLUX.1-Krea-dev
- **Type**: 12 billion parameter rectified flow transformer
- **Capabilities**: High-quality text-to-image generation with aesthetic focus
- **Resolution**: Up to 2048x2048 pixels
- **License**: Non-commercial license (see HuggingFace page for details)
- **Precision**: BFloat16 on GPU, Float32 on CPU

### Key Components
- **Main Model**: black-forest-labs/FLUX.1-Krea-dev (12B parameters)
- **VAE**: FLUX.1-Krea-dev VAE for high-quality encoding/decoding
- **Tiny AutoEncoder**: madebyollin/taef1 for fast preview generation
- **Scheduler**: FlowMatchEulerDiscreteScheduler for optimal sampling

### Dependencies
- PyTorch 2.7.0+ with CUDA 12.8 support
- Diffusers (latest from Git for FLUX support)
- Transformers 4.42.4
- XFormers for memory efficiency
- Accelerate for distributed computing
- Gradio for web interface

### GPU Support Matrix

| Platform | NVIDIA | AMD | CPU |
|----------|--------|-----|-----|
| Windows | CUDA 12.8 + XFormers | DirectML | CPU-only |
| Linux | CUDA 12.8 + XFormers + SageAttention | ROCm 6.2.4 | CPU-only |
| macOS | N/A | N/A | CPU + Metal |

## 🚨 Troubleshooting

### Common Issues

**Slow generation on CPU**
- This is normal - CPU inference is much slower than GPU
- Diffusion models are particularly compute-intensive
- Consider using a GPU with 8GB+ VRAM for optimal performance

**Out of memory errors**
- Reduce image resolution (try 1024x1024 or 512x512)
- Lower number of inference steps
- Close other applications to free VRAM/RAM
- Consider using the tiny autoencoder (taef1) for reduced memory usage

**Model download fails**
- Check internet connection
- Model files (~12GB) download automatically on first use
- Downloads are cached by HuggingFace for future use
- Ensure sufficient disk space (15GB+ recommended)

**Generation quality issues**
- Try different guidance scale values (3.5-7.5 work well)
- Increase inference steps for better quality (28-50 recommended)
- Use more descriptive prompts
- Experiment with different seeds

### Performance Tips

- **GPU Users**: Use NVIDIA GPU with 8GB+ VRAM for best experience
- **CPU Users**: Use smaller resolutions and be patient with generation times
- **Memory**: Close unnecessary applications during generation
- **Prompt Quality**: More descriptive prompts generally produce better results
- **Settings**: Start with default settings and adjust based on results

## 🔄 Updates

The package includes an automatic update system:

1. Click "Update" in the Pinokio interface
2. Wait for dependencies and model updates to complete
3. Restart the application to use the latest version

## 🎨 Example Prompts

- "a tiny astronaut hatching from an egg on mars"
- "a dog holding a sign that reads 'hello world'"
- "an anime illustration of an apple strudel"
- "a majestic landscape with mountains and a flowing river at sunset"
- "portrait of a cyberpunk character with neon lighting"

## 🤝 Contributing

Contributions are welcome! Please feel free to submit issues, feature requests, or pull requests.

### Development Setup

1. Fork this repository
2. Make your changes to the Pinokio scripts or Gradio interface
3. Test thoroughly on your target platform
4. Submit a pull request with a clear description

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

The FLUX.1-Krea-dev model is licensed under a non-commercial license - please refer to the [official model page](https://huggingface.co/black-forest-labs/FLUX.1-Krea-dev) for details.

## 🙏 Acknowledgments

- [Black Forest Labs](https://blackforestlabs.ai/) for the FLUX.1-dev model
- [Krea](https://krea.ai/) for the enhanced tuning and customization
- [Pinokio](https://pinokio.computer/) for the amazing AI package manager
- [Gradio](https://gradio.app/) for the web interface framework
- [HuggingFace](https://huggingface.co/) for model hosting and diffusers library
- The open-source AI community for making this possible

## 📞 Support

- **Issues**: Use GitHub Issues for bug reports and feature requests
- **Discussions**: Use GitHub Discussions for questions and community support
- **Documentation**: Check the [Pinokio documentation](https://docs.pinokio.computer/) for general Pinokio help
- **Model Support**: Check [FLUX.1-Krea-dev model page](https://huggingface.co/black-forest-labs/FLUX.1-Krea-dev) for model-specific information

---

**Made with ❤️ for the AI art community**