import apisauce from 'apisauce'

const ApiConfig = {
  baseURL: 'http://localhost:3000/',
  headers: {
    'Cache-Control': 'no-cache'
  }
}

if (__DEV__) {

}

const Api = apisauce.create({
  baseURL: ApiConfig.baseURL,
  headers: {...ApiConfig.headers},
})

Api.addResponseTransform((response) => {
  if(response.ok){
    // if need naything
  }else{
    // TODO Error handling
    alert('Pardon, ters birsey oldu :( Hata: '+response.problem)
  }
})

// log for Reactotron, TODO: Not working check it
if (__DEV__ && console.tron) {
   console.tron.log('Hello, I\'m an example of how to log via Reactotron.')
   Api.addMonitor(console.tron.apisauce)
 }

export default Api
