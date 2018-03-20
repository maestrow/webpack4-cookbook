## Miminal project

    powershell

    mkdir zeroConfig | cd

    npm init -y
    npm i -D webpack webpack-cli

    mkdir src | cd
    "console.log('Default entry point');" | Add-Content
    cd ..


## Mode parameter

    webpack --mode development
    webpack --mode production

It's better to add this commands as scripts in `package.json`:

    "scripts": {
      "dev": "webpack --mode development",
      "build": "webpack --mode production"
    }

    npm run dev
    npm run build

## Overriding the defaults entry/output

    webpack --mode development ./foo/src/js/index.js --output ./foo/main.js


