const  fs = require('fs')
const path = require('path')

async function readdir(rootDir) {
    rootDir = rootDir || path.resolve(__dirname)
    const files = await fs.promises.readdir(rootDir)
    walk(files, rootDir)
}

async function walk(files, rootDir ) {
    for(let file of files) {
        const fileFullPath = path.resolve(rootDir, file)
        const stats = await fs.promises.stat(fileFullPath)

        if(/\.git$/.test(fileFullPath)) continue
        if(/\.node_modules$/.test(fileFullPath)) continue
        

        if(stats.isDirectory()) {
            readdir(fileFullPath)
            continue
        }
        if(!/\.css$/.test(fileFullPath) && !/\.html$/.test(fileFullPath)) continue
            
        
        console.log(fileFullPath)
    }   
}

readdir('/Programação/CursoJavaScript-avancado')