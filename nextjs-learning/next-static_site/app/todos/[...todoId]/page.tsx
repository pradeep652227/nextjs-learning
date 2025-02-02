interface Params {
    todoId: string[];
}

export default async function Page({ params }: { params: Promise<Params> }) {

    const todoId = (await params).todoId.join('/');
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/' + todoId);
    const todo = await response.json();

    console.log('todo fetched from server:', todo);
    return (
        <div>
            <h1 className="text-3xl text-center">Todo</h1>
            <ul>
                <li key={todo.id}>{todo.title}</li>
            </ul>
        </div>
    );
}

//1. getStaticPaths : Fetch all todos to pre-render
export async function generateStaticParams() {
    const todosResponse = await fetch('https://jsonplaceholder.typicode.com/todos');
    const todos = await todosResponse.json();

    console.log('todos fetched from server');

    const paths = todos.map((todo: { id: number }) => ({
        todoId: [todo.id.toString()]
    }));

    return paths;
}