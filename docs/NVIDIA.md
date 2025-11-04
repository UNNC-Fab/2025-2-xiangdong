# Nvidia's development voice and development environment  
'''md
##  Core development language

1.  C/C++ : The most core and fundamental programming language. It is used for writing high-performance CUDA core functions and is the preferred choice for drivers, high-performance computing, and low-level optimization.

2.  Python: The most popular language in the fields of AI and deep learning. Calling CUDA through mainstream frameworks such as PyTorch and TensorFlow is the main force for model training and experimentation.

3.  Fortran: Mainly used in scientific computing and high-performance computing fields, NVIDIA provides a dedicated CUDA Fortran compiler.

##  Core development environment and tools

1.  CUDA Toolkit: The most fundamental and indispensable software development kit. It includes a compiler (NVCC), debugger, performance analyzer and GPU acceleration library.

2.  Integrated Development Environment (IDE)

:Visual Studio + NVIDIA Nsight: The main development environment on Windows.

:VS Code + related plugins: A lightweight and cross-platform popular choice.

:Nsight Eclipse Edition: The official IDE on Linux.

3.  Domain-specific SDK

:NVIDIA HPC SDK: Provides a complete set of compilers and tools for high-performance computing applications.

:JetPack SDK: Provides a complete development environment for Jetson edge computing devices.

:TensorRT: An SDK for high-performance deep learning inference.

In summary, NVIDIA's development mainly focuses on C/C++ and Python. On the CUDA foundation platform, it uses tools such as Nsight for development and debugging, and selects corresponding SDKS based on different fields (HPC, AI, edge).
'''
Learn more about the [CUDA](https://www.nvidia.com/zh-tw/technologies/cuda-x/)