// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import User from 'path/to/interfaces';

declare global {
  interface Window {
    electron: {
      sayHello: () => void;
      receiveHello: (handler: (event, args) => void) => void;
      stopReceivingHello: (handler: (event, args) => void) => void;
    };
  }
}

export type User = {
  id: number;
  name: string;
};
