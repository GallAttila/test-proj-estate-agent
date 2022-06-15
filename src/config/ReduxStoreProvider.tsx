import { FC, ReactNode } from 'react'
import { Provider as StoreProvider } from 'react-redux'
import store from 'store/index'


const ReduxStoreProvider:FC<{children: ReactNode}> = (props) => {
  return (
      <StoreProvider store={store}>
        {props.children}
      </StoreProvider>
  )
}

export default ReduxStoreProvider
