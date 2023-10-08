import React, {createContext} from 'react';
import Toast from 'react-native-toast-message';

const ToastContext = createContext();
const status = {
  success: 'success',
  infor: 'infor',
  warning: 'warning',
  error: 'error',
};
const ToastProvider = ({children}) => {
  const showToast = async data => {
    Toast.show({
      type:
        data?.type == status.warning
          ? status.error
          : data?.type == status.infor
          ? 'info'
          : data?.type,
      text1: data?.title,
      text2: data?.msg,
      visibilityTime: data?.time ? data?.time : 1200,
    });
  };
  const value = {showToast};
  return (
    <ToastContext.Provider value={value}>
      <Toast />
      {children}
    </ToastContext.Provider>
  );
};

const useToast = () => {
  const context = React.useContext(ToastContext);
  if (context === undefined) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

export {ToastProvider, useToast};
