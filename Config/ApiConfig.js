import apisauce from 'apisauce'

const ApiConfig = {
  baseURL: '<base url>',
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
    // on success response
  }else{
    alert('Pardon, ters birsey oldu :( Hata: '+response.problem)
  }
})

if (__DEV__ && console.tron) {
   console.tron.log('Hello, I\'m an example of how to log via Reactotron.')
   Api.addMonitor(console.tron.apisauce)
 }

export default Api
