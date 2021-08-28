import React, { createContext } from 'react';
import useContextState from '../hooks/useContextState';

type ContextState<T> = {
    get: T,
    set: React.Dispatch<React.SetStateAction<T>>
}

interface ContextProps {
    example: ContextState<string>
}

export const ShapeContext = createContext<ContextProps>({} as ContextProps);

const ShapeProvider: React.FC = ({children}) => {
    const example = useContextState<string>('hello');
    return (
        <ShapeContext.Provider value={{
            example
        }}>
            {children}
        </ShapeContext.Provider>
    )
}

export default ShapeProvider;