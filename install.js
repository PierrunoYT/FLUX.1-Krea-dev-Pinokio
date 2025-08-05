module.exports = {
  run: [
    // Clone FLUX.1-Krea-dev from Hugging Face Spaces
    {
      method: "shell.run",
      params: {
        message: [
          "git clone https://huggingface.co/spaces/PierrunoYT/FLUX.1-Krea-dev app",
        ]
      }
    },
    // Install all requirements first (before PyTorch to prevent version conflicts)
    {
      method: "shell.run",
      params: {
        venv: "env",
        path: "app",
        message: [
          "uv pip install -r requirements.txt"
        ]
      }
    },
    // Install PyTorch LAST to guarantee correct CUDA version
    {
      method: "script.start",
      params: {
        uri: "torch.js",
        params: {
          venv: "env",
          path: "app",
          xformers: true,   // Enable xformers for memory efficiency
          triton: true      // Enable triton for optimized kernels
        }
      }
    },
    // Create installation completion marker
    {
      method: "fs.write",
      params: {
        path: "app/INSTALLATION_COMPLETE.txt",
        text: "FLUX.1-Krea-dev installation completed successfully.\n\nNext steps:\n1. Start the application using the Start button\n2. Open the web interface at the provided URL\n3. Begin generating images with text-to-image features\n\nNote: All models are public and no HuggingFace authentication required.\n\nModels will be downloaded automatically on first use:\n- black-forest-labs/FLUX.1-Krea-dev (main model)\n- madebyollin/taef1 (tiny autoencoder)"
      }
    }
  ]
}
