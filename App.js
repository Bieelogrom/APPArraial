

import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text,TextInput, View,Button, StyleSheet,TouchableOpacity, Image, ScrollView} from 'react-native';
import axios from 'axios';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//expo install react-native-screens react-native-safe-area-context
//npm install @react-navigation/native-stack
//npm install axios


//Tela Inicial


function Usuário({ navigation }){


  return(
  
  <View style={styles.telaInicialContainer}>
  <Image style={{height:'11em',width:'100%',marginTop:'-0em', position:'absolute',zIndex:'5'}} source={"https://i.pinimg.com/originals/a6/c7/e6/a6c7e6a9d641ccf2d91162adf3f44ff0.png"}/>
  <Text  style={{position:'absolute',marginTop:"50%", color:'white', fontSize:'40px', fontFamily:'Times New Roman', fontWeight:'bold', marginLeft:'55px', textAlign:'center'}}>Bem-vindo a Etec{'\n'}de{'\n'}Guaianases</Text>
  <ScrollView style={styles.scrollView} horizontal={true}>
      <View style={styles.rowCards}>
             <TouchableOpacity title="Aluno" onPress= {()=>navigation.navigate('Menu do Aluno')} style={styles.card}>
                  <View  style={styles.columnButton}>
                  <Image style={styles.imgButtonCard} source={"https://cdn-icons-png.flaticon.com/512/57/57073.png"}/>
                  <Text  style={styles.textButtonCard1}>Aluno</Text>
                  </View>
              </TouchableOpacity>
              <TouchableOpacity title="Aluno" onPress={() => navigation.navigate('Menu do Professor')} style={styles.card}>
                  <View  style={styles.columnButton}>
                  <Image style={styles.imgButtonCard1} source={"https://icons.veryicon.com/png/o/miscellaneous/people-4/teacher-14.png"}/>
                  <Text  style={styles.textButtonCard}>Professor</Text>
                  </View>
              </TouchableOpacity>
              <TouchableOpacity title="Aluno" onPress={() => navigation.navigate('Menu do Convidado')} style={styles.card}>
                  <View  style={styles.columnButton}>
                  <Image style={styles.imgButtonCard1} source={"https://icons.veryicon.com/png/o/miscellaneous/youyinzhibo/guest.png"}/>
                  <Text  style={styles.textButtonCard}>Professor</Text>
                  </View>
              </TouchableOpacity>
              
      </View>
    </ScrollView>
      <Image style={{height:'16em',width:'100%',marginTop:'139%', position:'absolute',zIndex:'5'}} source={"https://media2.giphy.com/media/d9ZfjDBpd6oSxf6uyF/giphy.gif"}/>
  </View>
  
  
  );
  
  }





//Area do menu Professor

function HomeScreen({ navigation }) {

  const verificar = ()=>{

      navigation.navigate('CadastrarProfessor')

  } 
  const verificarBLA = ()=>{

    navigation.navigate('ConsultaProfessor')

  }
  const verificarCPP = ()=>{

    navigation.navigate('ConsultaParamProf')

  }  

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>


      <View style={styles.backgroundProf}>
      <Image style={{height:'11em',width:'100%',marginTop:'-0em', position:'absolute',zIndex:'5'}} source={"https://i.pinimg.com/originals/a6/c7/e6/a6c7e6a9d641ccf2d91162adf3f44ff0.png"}/>
            <View style={styles.boxButton}>

              <TouchableOpacity title="Insert Professor" onPress= {()=> verificar()} style={styles.button}>
                <View  style={styles.rowButton}>
                <Image style={styles.imgButton} source={"https://i.pinimg.com/originals/53/79/9d/53799d51a62bd28cb04c8a4c57f054c9.png"}/>
                <Text  style={styles.textButtonStyle}>Cadastrar Professor</Text>
                </View>
              </TouchableOpacity>

                <TouchableOpacity title="Consulta Professor"   onPress= {()=> verificarBLA()} style={styles.button}>
                  <View  style={styles.rowButton}>
                  <Image style={styles.imgButton} source={"https://cdn-icons-png.flaticon.com/512/1950/1950715.png"}/>
                  <Text  style={styles.textButtonStyle}>Consultar Professor</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity title="Consulta Parametrizada Professor"   onPress= {()=> verificarCPP()} style={styles.button}>
                  <View  style={styles.rowButton}>
                  <Image style={styles.imgButton} source={"https://cdn4.iconfinder.com/data/icons/folders-56/64/x-19-512.png"}/>
                  <Text  style={styles.textButtonStyleEspecial}>Consultar Parametrizada</Text>
                  </View>
                </TouchableOpacity>
            </View>
            {/* balão junino */}
            <Image style={{height:'17em',width:'30%',marginTop:'35em', marginRight:'12em',position:'absolute',zIndex:'5'}} source={"https://i.pinimg.com/originals/94/40/05/944005263ffb3e0dbccdafc5bd3c8acf.png"}/>
            <Image style={{height:'17em',width:'30%',marginTop:'35em', marginLeft:'12em',position:'absolute',zIndex:'5'}} source={"https://i.pinimg.com/originals/94/40/05/944005263ffb3e0dbccdafc5bd3c8acf.png"}/>

      </View>

    </View>
  );
}



  //Cadastro Prof


  function BLA({ navigation }){
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getProfessores = async () => {
      try {
        const response = await fetch('http://localhost/projeto-evento/professor-json.php');
        const json = await response.json();
        setData(json.professor);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    useEffect(() => {
      getProfessores();
    }, []);

    return (
      <View style={{ flex: 1, padding: 24,backgroundColor:'#00008B'}} >

        <View>
          <Text style={styles.title}>Professores Cadastrados</Text>
        </View>
        <View style={styles.cuboApresnt} >
        {isLoading ? <ActivityIndicator/> : (

          <FlatList


            data={data}
          keyExtractor={({ idProfessor }, index) => idProfessor}
            renderItem={({ item }) => (

              <Text style={styles.listProf}>{item.nomeProfessor}</Text>
            )}
          />
        )}
        </View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>



        <TouchableOpacity title="Voltar"   onPress={() => navigation.navigate('Menu do Professor')} style={styles.button}>
                  <View  style={styles.rowButton}>
                  <Image style={styles.imgButton} source={"https://clipart-library.com/images/ziX5GKgAT.png"}/>
                  <Text  style={styles.textButtonStyle1}>Voltar</Text>
                  </View>
        </TouchableOpacity>

    </View>
      </View>
    );
  };


  //Consulta Professor




  function DetailsScreen({ navigation }) {

  const [professor,setProfessor] = useState()
  const [dados,setDados] = useState()


  const verificar = ()=>{   
    const valores = professor

    fetch('http://localhost/projeto-evento/professor-inserir.php', {
      method: 'post',
      header:{
        'Accept': 'application/json',
        'Content-type': 'application/json'
      },
      body:JSON.stringify({
        professor: professor,       
      })      
    })
    setDados(valores)        
  } 

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={styles.backgroundProf}>

          <View style={styles.boxButton}>
          <Text style={styles.textButtonStyle2}> Cadastrar Professor </Text>
                <TextInput                         
                    style={styles.inptStyle}   
                    placeholder='Digite o nome do professor'

                    autoFocus={true}     
                    onChangeText = {text =>setProfessor(text)}
                  />    
            <TouchableOpacity title="Insert Professor" onPress= {()=> verificar()} style={styles.button}>
              <View  style={styles.rowButton}>
              <Image style={styles.imgButton} source={"https://cdn-icons-png.flaticon.com/512/149/149654.png"}/>
              <Text  style={styles.textButtonStyle1}>Salvar</Text>
              </View>
            </TouchableOpacity>

              <TouchableOpacity title="Voltar" onPress={() => navigation.navigate('Menu do Professor')} style={styles.button}>
                <View  style={styles.rowButton}>
                <Image style={styles.imgButton} source={"https://clipart-library.com/images/ziX5GKgAT.png"}/>
                <Text  style={styles.textButtonStyle1}>Voltar</Text>
                </View>
              </TouchableOpacity>
          </View>

      </View>




    </View>
  );
  }




//Area de Menu Aluno


function AlunoScreen({navigation}){
      const consultaAluno=()=>{
          navigation.navigate('ConsultaAluno')// função pro botao que vai para a parte de consulta de aluno
      }

      const cadastroAluno=()=>{
          navigation.navigate('CadastroAluno')// funcao para o botao que vai para parte de cadastro do aluno
      }
      const ConsultaParamAluno=()=>{
        navigation.navigate('ConsultaParamAluno')// funcao para o botao que vai para parte de consulta parametrizada do aluno
    }
return(
      <View style={styles.background}>
<Image style={{height:'11em',width:'100%',marginTop:'-0em', position:'absolute',zIndex:'5'}} source={"https://i.pinimg.com/originals/a6/c7/e6/a6c7e6a9d641ccf2d91162adf3f44ff0.png"}/>
      <View style={styles.boxButton}>
        <TouchableOpacity title="Insert Professor" onPress= {()=> cadastroAluno()} style={styles.button}>
          <View  style={styles.rowButton}>
          <Image style={styles.imgButton} source={"https://i.pinimg.com/originals/53/79/9d/53799d51a62bd28cb04c8a4c57f054c9.png"}/>
          <Text  style={styles.textButtonStyle}>Cadastrar Aluno</Text>
          </View>
        </TouchableOpacity>

          <TouchableOpacity title="Consulta Professor"   onPress= {()=> consultaAluno()} style={styles.button}>
            <View  style={styles.rowButton}>
            <Image style={styles.imgButton} source={"https://cdn-icons-png.flaticon.com/512/1950/1950715.png"}/>
            <Text  style={styles.textButtonStyle}>Consultar Aluno</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity title="Consulta Parametrizada Aluno"   onPress= {()=> ConsultaParamAluno()} style={styles.button}>
                  <View  style={styles.rowButton}>
                  <Image style={styles.imgButton} source={"https://cdn4.iconfinder.com/data/icons/folders-56/64/x-19-512.png"}/>
                  <Text  style={styles.textButtonStyleEspecial}>Consultar Parametrizada</Text>
                  </View>
                </TouchableOpacity>
      </View>
      {/* balão junino 2*/}
      <Image style={{height:'17em',width:'30%',marginTop:'35em', marginRight:'12em',position:'absolute',zIndex:'5'}} source={"https://i.pinimg.com/originals/94/40/05/944005263ffb3e0dbccdafc5bd3c8acf.png"}/>
      <Image style={{height:'17em',width:'30%',marginTop:'35em', marginLeft:'12em',position:'absolute',zIndex:'5'}} source={"https://i.pinimg.com/originals/94/40/05/944005263ffb3e0dbccdafc5bd3c8acf.png"}/>
 </View>
);

}


//Cadastro Aluno



function cadastroAluno({navigation}){
    const [aluno,setAluno] = useState()
    const [turma,setTurma] = useState()
   


    const verificar = ()=>{   
      const valores = aluno;


      fetch('http://localhost/projeto-evento/aluno-inserir.php', {
        method: 'post',
        header:{
          'Accept': 'application/json',
          'Content-type': 'application/json'
        },
        body:JSON.stringify({
          aluno: aluno,     
          turma: turma,
        })      
      })
      setDados(valores)        
    } 

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={styles.backgroundProf}>
  
            <View style={styles.boxButton}>
            <Text style={styles.textButtonStyle2}> Cadastrar Aluno </Text>
            <TextInput                         
                      style={styles.inptStyle}   
                      placeholder='Digite a nome do Aluno'
  
                      autoFocus={true}     

                      onChangeText = {text =>setAluno(text)}
                    /> 

              <TextInput                         
                      style={styles.inptStyle}   
                      placeholder='Digite a turma do Aluno'
  
                      autoFocus={true}   
                        
                      onChangeText = {text =>setTurma(text)}
                    /> 

                  
                  
                   
            <TouchableOpacity title="Insert Aluno" onPress= {()=> verificar()} style={styles.button}>
              <View  style={styles.rowButton}>
              <Image style={styles.imgButton} source={"https://cdn-icons-png.flaticon.com/512/149/149654.png"}/>
              <Text  style={styles.textButtonStyle1}>Salvar</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity title="Voltar"   onPress={() => navigation.navigate('Menu do Aluno')} style={styles.button}>
                  <View  style={styles.rowButton}>
                  <Image style={styles.imgButton} source={"https://clipart-library.com/images/ziX5GKgAT.png"}/>
                  <Text  style={styles.textButtonStyle1}>Voltar</Text>
                  </View>
        </TouchableOpacity>
          </View>

      </View>
    </View>

    );
}




//Consulta Aluno




function ConsultaAluno({navigation}){

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);


  const consultarAluno = async () => {
    try {
      const response = await fetch('http://localhost/projeto-evento/aluno-json.php');
      const json = await response.json();
      setData(json.aluno);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    consultarAluno();
  }, []);

  return (
    <View style={{ flex: 1, padding: 24,backgroundColor:'#459adc'}} >

      <View>
        <Text style={styles.title}>Alunos Cadastrados</Text>
      </View>
      <View style={styles.cuboApresnt} >
      {isLoading ? <ActivityIndicator/> : (

        <FlatList


          data={data}
          keyExtractor={({ idAluno }, index) => idAluno}
          renderItem={({ item }) => (

            <Text style={styles.listProf}> {item.nomeAluno}, {item.turma}</Text>
          )}
        />
      )}
      </View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>



      <TouchableOpacity title="Voltar"   onPress={() => navigation.navigate('Menu do Aluno')} style={styles.button}>
                  <View  style={styles.rowButton}>
                  <Image style={styles.imgButton} source={"https://clipart-library.com/images/ziX5GKgAT.png"}/>
                  <Text  style={styles.textButtonStyle1}>Voltar</Text>
                  </View>
        </TouchableOpacity>

  </View>
    </View>
  );

}


// Area da consulta parametizada


  //Aluno



  function ConsultaParamAluno({navigation}){
    const [nome, setNome] = useState('');
    const [resultados, setResultados] = useState([]);
  
    const pesquisar = async () => {
      try {
        const response = await axios.get(`http://localhost/projeto-evento/aluno-param.php?nome=${nome}`);
        setResultados(response.data.aluno);
      } catch (error) {
        console.error(error);
      }
    };
  

    return (
      <View style={{ flex: 1, padding: 24,backgroundColor:'#459adc'}} >

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.textButtonStyleParam  }> Procurar Aluno </Text>
                  <TextInput                         
                      style={styles.inptStyle}   
                      placeholder='Digite o nome do aluno'
                      autoFocus={true}     
                      onChangeText = {text =>setNome(text)}
                      value={nome}
                    />
            <View>
       

          <FlatList
            data={resultados}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <Text style={styles.listProf}> {item.nomeAluno}, {item.turma}</Text>
            )}
          />

        </View>   

        <Text> </Text>

        <TouchableOpacity title="Insert Aluno" onPress= {pesquisar} style={styles.button}>
                <View  style={styles.rowButton}>
                <Image style={styles.imgButton} source={"https://icon-icons.com/icons2/561/PNG/512/active-search_icon-icons.com_53799.png"}/>
                <Text  style={styles.textButtonStyleCon}>Consultar</Text>
                </View>
              </TouchableOpacity>
              <Text> </Text>
          <TouchableOpacity title="Voltar"   onPress={() => navigation.navigate('Menu do Aluno')} style={styles.button}>
                    <View  style={styles.rowButton}>
                      <Image style={styles.imgButton} source={"https://clipart-library.com/images/ziX5GKgAT.png"}/>
                      <Text  style={styles.textButtonStyle1}>Voltar</Text>
                    </View>
          </TouchableOpacity>
          <Image style={{height:'15em',width:'60%',marginTop:'35em', position:'absolute',zIndex:'5'}} source={"https://imagensemoldes.com.br/wp-content/uploads/2020/05/Cartoon-Vegetal-Milho-PNG.png"}/>

        </View>
      </View>
    );

  }


  //Prof


  function ConsultaParamProf({navigation}){
    const [nome, setNome] = useState('');
  const [resultados, setResultados] = useState([]);

  const pesquisar = async () => {
    try {
      const response = await axios.get(`http://localhost/projeto-evento/professor-param.php?nome=${nome}`);
      setResultados(response.data.professor);
    } catch (error) {
      console.error(error);
    }
  };

    return (
      <View style={{ flex: 1, padding: 24,backgroundColor:'#00008B'}} >

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.textButtonStyleParam}> Procurar Professor </Text>  
          <TextInput
            style={styles.inptStyle} 
            placeholder="Digite o nome do professor"
            onChangeText={text => setNome(text)}
            value={nome}
          />
          <View>
            <FlatList
              data={resultados}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => <Text style={styles.listProf}>{item.nomeProfessor}</Text>}
            />
          </View>
          <Text> </Text>

          <TouchableOpacity title="Insert Professor" onPress= {pesquisar} style={styles.button}>
            <View  style={styles.rowButton}>
              <Image style={styles.imgButton} source={"https://icon-icons.com/icons2/561/PNG/512/active-search_icon-icons.com_53799.png"}/>
              <Text  style={styles.textButtonStyleCon}>Consultar</Text>
            </View>
          </TouchableOpacity>

          <Text> </Text>

          <TouchableOpacity title="Voltar"   onPress={() => navigation.navigate('Menu do Professor')} style={styles.button}>
            <View  style={styles.rowButton}>
              <Image style={styles.imgButton} source={"https://clipart-library.com/images/ziX5GKgAT.png"}/>
              <Text  style={styles.textButtonStyle1}>Voltar</Text>
            </View>
          </TouchableOpacity>
          <Image style={{height:'15em',width:'60%',marginTop:'35em', position:'absolute',zIndex:'5'}} source={"https://imagensemoldes.com.br/wp-content/uploads/2020/05/Cartoon-Vegetal-Milho-PNG.png"}/>

        </View>
      </View>
    );

  }

//convidado


  function ConvidadoScreen({navigation}){
    const consultaAluno=()=>{
        navigation.navigate('ConsultarConvidado')// função pro botao que vai para a parte de consulta de aluno
    }

    const cadastroAluno=()=>{
        navigation.navigate('CadastroConvidado')// funcao para o botao que vai para parte de cadastro do aluno
    }
    const ConsultaParamAluno=()=>{
      navigation.navigate('ConsultaParamAluno')// funcao para o botao que vai para parte de consulta parametrizada do aluno
  }
return(
    <View style={styles.background}>
<Image style={{height:'11em',width:'100%',marginTop:'-0em', position:'absolute',zIndex:'5'}} source={"https://i.pinimg.com/originals/a6/c7/e6/a6c7e6a9d641ccf2d91162adf3f44ff0.png"}/>
    <View style={styles.boxButton}>
      <TouchableOpacity title="Insert Professor" onPress= {()=> cadastroAluno()} style={styles.button}>
        <View  style={styles.rowButton}>
        <Image style={styles.imgButton} source={"https://i.pinimg.com/originals/53/79/9d/53799d51a62bd28cb04c8a4c57f054c9.png"}/>
        <Text  style={styles.textButtonStyle}>Cadastrar Convidado</Text>
        </View>
      </TouchableOpacity>

        <TouchableOpacity title="Consulta Professor"   onPress= {()=> consultaAluno()} style={styles.button}>
          <View  style={styles.rowButton}>
          <Image style={styles.imgButton} source={"https://cdn-icons-png.flaticon.com/512/1950/1950715.png"}/>
          <Text  style={styles.textButtonStyle}>Consultar Convidado</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity title="Consulta Parametrizada Aluno"   onPress= {()=> ConsultaParamAluno()} style={styles.button}>
                <View  style={styles.rowButton}>
                <Image style={styles.imgButton} source={"https://cdn4.iconfinder.com/data/icons/folders-56/64/x-19-512.png"}/>
                <Text  style={styles.textButtonStyleEspecial}>Consultar Parametrizada</Text>
                </View>
              </TouchableOpacity>
    </View>
    {/* balão junino 2*/}
    <Image style={{height:'17em',width:'30%',marginTop:'35em', marginRight:'12em',position:'absolute',zIndex:'5'}} source={"https://i.pinimg.com/originals/94/40/05/944005263ffb3e0dbccdafc5bd3c8acf.png"}/>
    <Image style={{height:'17em',width:'30%',marginTop:'35em', marginLeft:'12em',position:'absolute',zIndex:'5'}} source={"https://i.pinimg.com/originals/94/40/05/944005263ffb3e0dbccdafc5bd3c8acf.png"}/>
</View>
);

}


function inserirConvidado ({navigation}){

  const [convidado,setConvidado] = useState()
  const [dados,setDados] = useState()


  const verificar = ()=>{   
    const valores = convidado

    fetch('http://localhost/projeto-evento/convidado-inserir.php', {
      method: 'post',
      headers:{
        'Accept': 'application/json',
        'Content-type': 'application/json'
      },
      body:JSON.stringify({
        convidado: convidado      
      })      
    })
    setDados(valores)        
  } 

  

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={styles.backgroundProf}>

          <View style={styles.boxButton}>
          <Text style={styles.textButtonStyle2}> Cadastrar convidado </Text>
                <TextInput                         
                    style={styles.inptStyle}   
                    placeholder='Digite o nome do convidado'

                    autoFocus={true}     
                    onChangeText = {text =>setConvidado(text)}
                  />    
            <TouchableOpacity title="Insert Convidado" onPress= {()=> verificar()} style={styles.button}>
              <View  style={styles.rowButton}>
              <Image style={styles.imgButton} source={"https://cdn-icons-png.flaticon.com/512/149/149654.png"}/>
              <Text  style={styles.textButtonStyle1}>Salvar</Text>
              </View>
            </TouchableOpacity>

              <TouchableOpacity title="Voltar" onPress={() => navigation.navigate('Menu do Convidado')} style={styles.button}>
                <View  style={styles.rowButton}>
                <Image style={styles.imgButton} source={"https://clipart-library.com/images/ziX5GKgAT.png"}/>
                <Text  style={styles.textButtonStyle1}>Voltar</Text>
                </View>
              </TouchableOpacity>
          </View>

      </View>




    </View>
  );
}

function consultarConvidado ({navigation}){

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);


  const consultarConvidado = async () => {
    try {
      const response = await fetch('http://localhost/projeto-evento/convidado-json.php');
      const json = await response.json();
      setData(json.convidado);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    consultarConvidado();
  }, []);

  return (
    <View style={{ flex: 1, padding: 24,backgroundColor:'#459adc'}} >

      <View>
        <Text style={styles.title}>Convidados Cadastrados</Text>
      </View>
      <View style={styles.cuboApresnt} >
      {isLoading ? <ActivityIndicator/> : (

        <FlatList


          data={data}
          keyExtractor={({ idConvidado }, index) => idConvidado}
          renderItem={({ item }) => (

            <Text style={styles.listProf}> {item.nomeConvidado}, {item.data}</Text>
          )}
        />
      )}
      </View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>



      <TouchableOpacity title="Voltar"   onPress={() => navigation.navigate('Menu do Convidado')} style={styles.button}>
                  <View  style={styles.rowButton}>
                  <Image style={styles.imgButton} source={"https://clipart-library.com/images/ziX5GKgAT.png"}/>
                  <Text  style={styles.textButtonStyle1}>Voltar</Text>
                  </View>
        </TouchableOpacity>

  </View>
    </View>
  );

}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Usuário">
        <Stack.Screen name="Menu do Professor" component={HomeScreen} />        
        <Stack.Screen name="CadastrarProfessor" component={DetailsScreen} /> 
        <Stack.Screen name="ConsultaProfessor" component={BLA} />
        <Stack.Screen name="Usuário" component={Usuário} />        
        <Stack.Screen name="Menu do Aluno" component={AlunoScreen} />       
        <Stack.Screen name="ConsultaParamAluno" component={ConsultaParamAluno} />
        <Stack.Screen name="ConsultaParamProf" component={ConsultaParamProf} />
        <Stack.Screen name="CadastroAluno" component={cadastroAluno}/>
        <Stack.Screen name="ConsultaAluno" component={ConsultaAluno}/>
        <Stack.Screen name="Menu do Convidado" component={ConvidadoScreen} />
        <Stack.Screen name="CadastroConvidado" component={inserirConvidado}/>
        <Stack.Screen name="ConsultarConvidado" component={consultarConvidado}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}





const styles = StyleSheet.create({
  button:{
    color:'white',
    height:'5em',
    backgroundColor:'white',
    borderRadius:'10px',
    width:'20em',
    fontFamily:' arial, sans-serif',

  },

  scrollView: {

  },

  boxButton:{
    display:'flex',
    flexDirection:'column',
    gap:'2em',
    alignItems:'center',
    marginTop:'50%',

  },
  textButtonStyleEspecial:{
    fontSize:'18pt',
    color:'black',
    fontWeight:'800',

    marginTop:'0.3em',
    marginLeft:'1em',
  },
  textButtonStyle:{
    fontSize:'18pt',
    color:'black',
    fontWeight:'800',
    textAlign:'center',
    marginTop:'0.9em'
  },
  textButtonStyle1:{
    marginLeft:'3.1em',
    marginTop:'0.9em',
    fontWeight:'800',
    fontSize:'18pt',
  },
  textButtonStyle2:{
    fontWeight:'800',
    fontSize:'18pt',
    color:'white',
  },
  textButtonStyleCon:{
    marginLeft:'2.5em',
    marginTop:'0.9em',
    fontWeight:'800',
    fontSize:'18pt',
    
  },
  textButtonStyleParam:{
    fontWeight:'800',
    fontSize:'18pt',
    color:'white',
    marginBottom: '1em'
  },
  textButtonCard1:{
    fontWeight:'800',
    fontSize:'18pt',
    color:'white',
    marginLeft:"1.3em"
  },
  textButtonCard:{
    fontWeight:'800',
    fontSize:'18pt',
    color:'white',
    marginLeft:"0.3em"
  },
  imgButton:{
    height:'3em',
    width:'3em',
    marginTop:'1em',
    marginLeft:"0.5em"
  },
  rowButton:{
    display:'flex',
    flexDirection:'row',
  },
  background:{
    backgroundColor:'#459adc',
    height:'100%',
    width:'100%',
    alignItems:'center',
    borderRadius:'10px',
    alignItems:'center'
  },
  backgroundProf:{
    backgroundColor:'#00008B',
    height:'100%',
    width:'100%',
    alignItems:'center',
    borderRadius:'10px',
    alignItems:'center',
  },
  inptStyle:{
    height:'3em',
    width:'23em',
    color:'white',
    placeholderTextColor:'white',

    border:'solid #FFC80B 2px',
  },
  title:{
    fontSize:'18pt',
    color:'black',
    fontWeight:'800',
    textAlign:'center',
    color:'white',
  },
  listProf:{
    fontSize:'15pt',
    color:'black',
    marginTop:'1em',
    marginLeft:'20px',
    fontWeight:'bold'
 
  },
  columnButton:{
    display:'flex',
    flexDirection:'column',
  },
  imgButtonCard:{
    height:'8em',
    width:'8em',
  },
  imgButtonCard1:{
    height:'8em',
    width:'8em',
    marginTop:"em"
  },
  card:{
    height:'8em',
    width:'8em',
    backgroundColor:'white',
    borderRadius:'10px',
    alignItems:'center',
  },
  rowCards:{
    display:'flex',
    flexDirection:'row',
    gap:'3em',
    alignItems:'center',
    margin:'auto',
    marginTop:'100%'
  },
  telaInicialContainer:{
     backgroundColor:'#459adc',
     height:'100%'
  },
  cuboApresnt:{
    flex: 1, 
   
    justifyContent: 'center',
    backgroundColor:'white',
    borderRadius:'10px',
    marginTop:'30px',
    border:'2px solid black'
  }

});