import ReactDOM from 'react-dom/client'
import App from "@/app/ui/App.tsx";
import {Provider} from "react-redux";
import {store} from "@/app/store.ts";
import '@/assets/styles/index.scss'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Main} from "@/features/2-main/Main.tsx";
import {DetailItem} from "@/features/2-main/products/ui/detailItem/DetailItem.tsx";


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        index:true,
        element: <Main/>,
      },
      {
        path:'item/:id',
        element:<DetailItem/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
)

