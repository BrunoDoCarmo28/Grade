let note = prompt('insira sua nota, ou digite SAIR para sair')


if(typeof note==="string"){
  alert('Você saiu')
}

else if(note>=101){
  alert('Nota inválida. Digite novamente')
  
}

else if(note>89 && note<101){
  alert('Tirou A')
  
}

else if(note>=79 && note==80){
  alert('Tirou B')
  
}

else if(note>69 && note==70 ){
  alert('Tirou C')
  
}

else if(note>59 && note==69 ){
  alert('Tirou D')
  
}

else if(note<59){
  alert('Tirou F')
  
}