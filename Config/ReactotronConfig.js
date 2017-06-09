import Reactotron, { trackGlobalErrors } from 'reactotron-react-native'
import createReactotronEnhancer from 'reactotron-redux'
import tronsauce from 'reactotron-apisauce'

if (__DEV__) {
  Reactotron
    .configure({ name: 'Etkinik React App' })
    .use(tronsauce())
    .use(trackGlobalErrors({
      veto: frame => frame.fileName.indexOf('/node_modules/react-native/') >= 0
    }))
    .connect()

  console.tron = Reactotron
}

// Redux Enhancer
export const reactotronEnhancer = createReactotronEnhancer(Reactotron, {
   except: ['EFFECT_TRIGGERED', 'EFFECT_RESOLVED', 'EFFECT_REJECTED'],
   //isActionImportant: (action) => action.type === Types.STARTUP,
})
