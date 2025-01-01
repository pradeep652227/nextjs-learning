import axios from 'axios';

export default async function Blogs() {
    const blogs = await getBlogs();
    return (
        <div>
            <h1>Blogs</h1>
            {
                blogs.map((blog: IBlog) => <Todo key={blog.id} blog={blog} />)
            }
        </div>
    );

    async function getBlogs() {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
            return response.data;
        }
        catch (error) {
            console.dir(error, { depth: null });
        }
    }
}

interface IBlog {
    id: number;
    title: string;
    completed: boolean;
}
interface ITodoProps {
    blog: IBlog
}

function Todo({ blog }: ITodoProps) {
    return (
        <div>
            <h2>{blog.title}</h2>
            <p>{blog.completed ? 'Completed' : 'Not Completed'}</p>
        </div>
    );
}