import ReactDOM from 'react-dom/client'
import App from "@/app/ui/App.tsx";
import {Provider} from "react-redux";
import {store} from "@/app/store.ts";
import '@/assets/styles/index.scss'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App/>
  </Provider>
)

