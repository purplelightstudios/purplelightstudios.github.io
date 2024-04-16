# PurpleLight Studios Github Page

## Quick start

If you don't have a compatible version installed in your system (or if you find any problems trying to execute the project), download [hugo extended binaries](https://github.com/gohugoio/hugo/releases/tag/v0.117.0) and extract them inside the project folder, according to your OS: 

* **Linux:** Extract a file called **hugo** in your project root folder, rename it to *.hugo* and run the following commands:

  ```sh
  npm install

  # Using a globally installed hugo
  npm run start

  # Using a local bin
  npm run hugo-local
  ```

* **Windows:** Extract **hugo.exe** into the project root folder and run the following commands:
  
  > Important: clone this project on a path WITHOUT any empty spaces.

  ```sh
  npm install

  # Start developing
  npm run win
  ```

  On Windows, you may want to use this command to avoid warning messages like *This diff contains a change in line endings from 'LF' to 'CRLF* [more info here](https://github.com/desktop/desktop/issues/18225): 
  
  ```
  git config core.autocrlf input
  ```

## License

The content of this project itself is licensed under the Creative Commons Attribution 4.0 International ([CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)) license, and the underlying source code used to format and display that content is licensed under the Apache-2.0 license.
