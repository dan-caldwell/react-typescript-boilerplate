import React, { createContext } from 'react';
import useContextState from '../hooks/useContextState';

type ContextState<T> = {
    get: T,
    set: React.Dispatch<React.SetStateAction<T>>
}

interface ContextProps {
    example: ContextState<string>
}

export const ExampleContext = createContext<ContextProps>({} as ContextProps);

const ExampleProvider: React.FC = ({children}) => {
    const example = useContextState<string>('hello');
    return (
        <ExampleContext.Provider value={{
            example
        }}>
            {children}
        </ExampleContext.Provider>
    )
}

export default ExampleProvider;