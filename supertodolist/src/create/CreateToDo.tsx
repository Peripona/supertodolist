import React, {FunctionComponent, KeyboardEvent, ReactElement, useState} from "react";

export type priorityType = 'low' | 'medium' | 'high';

interface Task {
    title: string,
    time: string,
    priority: priorityType,
}

interface CreateToDoProps {
    task: string
}

export const CreateToDo: FunctionComponent = (): ReactElement => {
    const initialState: Array<string> = [];
    const [tasks, setValue] = useState(initialState);

    const onKeyCapture = (event: KeyboardEvent<HTMLInputElement>) => {
        const currentTarget = event.currentTarget;
        if (event.key === 'Enter') {
            setValue([...tasks, currentTarget.value]);
            currentTarget.value = '';
        }
    }

    return <div>
        <input className="border-4 bg-primary-700 md:-space-x-1" name="task" type='text' onKeyDownCapture={onKeyCapture}
               required/>
        {tasks && tasks.length > 0 &&
        <ul id="items">
            {tasks.map((task: string) => <li key={task}>{task}</li>)}
        </ul>
        }
    </div>;
}