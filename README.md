# Schematics React

Schematics generators for React 🎊

## Features
- 📜 Generates boilerplate
- 🎛️ Configurable
- 🛠️ Supports JavaScript & TypeScirpt
- 📦 Works with [`create-react-app`](https://github.com/facebook/create-react-app)

## Installation

To simplify and speed up the process of development we use a unified approach to add new structures of code to the project.
    
To start with generation of code based on schematic templates need to install some additional npm packages via next command:
    
    `npm install -g typescript`
    
    `npm install -g @angular-devkit/schematics-cli`

## Usage

```bash
schematics schematics-react:<generator name> <arguments>
```

## Available generators

   1) Create a React container.
    
    `schematics schematics-react:c /modules/YourModule/container/yourContainerName`
      
   2) Create a functional React component.
    
   `schematics schematics-react:fc /modules/YourModule/components/yourComponent`
    
   3) Create DDD module for React App.
    
    `schematics schematics-react:m myModuleName`
    
   4) Create page for DDD structure React App.
    
     `schematics schematics-react:p myPageName`
     
   5) Create HTTP service for DDD structure React App.
    
    `schematics schematics-react:s myServiceName` 
    
#### Available parameters

| Type | Name | Description | Default |
|------|:----:|------------:|--------:|
| *required* {string} | name | The name of the component. | none |
| {string} | path | The path to create the component | none |
| {string} | styleext | The file extension to be used for style files | 'css' |
| {boolean} | noSpec | Specifies if a spec file is generated | false |
| {boolean} | subfolder | Flag to indicate if a dir is created | false |
| {boolean} | propTypes | Specifies if a propTypes used | false |
| {boolean} | stateful | Specifies if a state used | false |
 {boolean} | ts | Specifies whether to use TypeScript | false |          
