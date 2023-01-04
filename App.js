import React, { useState } from "react";

import { SafeAreaView, StyleSheet, View, Text, TouchableHighlight, TextInput } from "react-native";
import Display from "./components/display";
import Btn from './components/botao'

let estados={
  valorTela:'',
  resultado:0,
  operado:false,
  ponto:false

}


const App = () => {

  const [vtela, setVtela] = useState(estados.valorTela)

  const [vres, setVres] = useState(estados.resultado)


   const addDigito=(d) =>{
    if(d=='+' || d=='-' || d=='/' || d=='*') {
      estados.ponto=false
    }
    if(d == '.' && !estados.ponto){
      estados.ponto=true
      estados.operado=false
    }else if(d=='.' && estados.ponto){
      return
    }
    
    if((d=='+' || d=='-' || d=='/' || d=='*') && estados.operado ){
      estados.valorTela=estados.resultado
      estados.resultado=0
    }
    estados.valorTela=estados.valorTela+d

   setVtela(estados.valorTela)
   setVres(estados.resultado)
   estados.operado=false
    

   }


   const limparTela=()=>{
  
    setVtela(estados.valorTela='')
    setVres(estados.resultado=0)

   }

   const opera=(d) =>{
    if(d =='AC'){
      limparTela()
      return
    }
    if(d =='BS'){
      estados.valorTela=vtela.substring(0,(vtela.length - 1))
      setVtela(estados.valorTela)
      return
      
    }
    try {
      estados.resultado=eval(estados.valorTela)
      estados.operacao=true
      setVres(estados.resultado)
    } catch  {
      estados.resultado='Error'
      estados.operacao=true
      setVres(estados.resultado)
      
    }

   }



  return (
    <SafeAreaView style={estilos.conteiner}>
      <Text> Calculadora   </Text>
      
     
      <Display valor={vtela} res={vres}/>
       <View style={estilos.botoes}>
          <Btn label='AC' ac  aoClicar={() => {opera('AC')}} />
          <Btn label='(' aoClicar={() => {addDigito('(')}} />
          <Btn label=')' aoClicar={() => {addDigito(')')}} />
          <Btn label='/' operacao aoClicar={() => {addDigito('/')}} />
          <Btn label='7' aoClicar={() => {addDigito('7')}} />
          <Btn label='8' aoClicar={() => {addDigito('8')}} />
          <Btn label='9' aoClicar={() => {addDigito('9')}} />
          <Btn label='*' operacao aoClicar={() => {addDigito('*')}} />
          <Btn label='4' aoClicar={() => {addDigito('4')}} />
          <Btn label='5' aoClicar={() => {addDigito('5')}} />
          <Btn label='6' aoClicar={() => {addDigito('6')}} />
          <Btn label='-' aoClicar={() => {addDigito('-')}} />
          <Btn label='1' aoClicar={() => {addDigito('1')}} />
          <Btn label='2' aoClicar={() => {addDigito('2')}} />
          <Btn label='3' aoClicar={() => {addDigito('3')}} />
          <Btn label='+' aoClicar={() => {addDigito('+')}} />
          <Btn label='0' aoClicar={() => {addDigito('0')}} />
          <Btn label='.' aoClicar={() => {addDigito('.')}} />
          <Btn label='<-' bs aoClicar={() => {opera('BS')}} />
          <Btn label='=' igual  aoClicar={() => {opera('=')}} />
        </View> 
    
    </SafeAreaView>

  )
}


export default App


const estilos = StyleSheet.create({

  conteiner: {
    flex:1,
    justifyContent: 'flex-start',
    alignItems:'center'
  },



 botoes:{
  flexDirection:'row',
  flexWrap: 'wrap'
 }


});