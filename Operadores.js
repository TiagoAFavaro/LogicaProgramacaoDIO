let cpfBloqueado = 12345678910

let cpfUsuario = 12345678910

let bloqueado = cpfUsuario === cpfBloqueado

if (bloqueado == false){
  console.log("Pode embarcar")
}
else{
    console.log("Usuario Bloqueado")
}