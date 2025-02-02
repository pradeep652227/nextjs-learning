
export default async function Page() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();

    console.log('data fetched from server:', data[0]);
    return (
        <div>
            <h1 className="text-3xl text-center">Todos</h1>
            <ul>
                {data.map((todo: { id: number; title: string }) => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
        </div>
    )
}