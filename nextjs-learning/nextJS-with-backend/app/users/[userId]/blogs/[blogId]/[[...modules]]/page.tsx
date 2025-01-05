import axios from 'axios';

export default async function Blogs({ params }: {
    params: {
        userId: string,
        blogId: string,
        modules : string[]
    }
}) {
    const userId = parseInt((await params).userId);
    const blogId = parseInt((await params).blogId);
    const modules = (await params).modules;
    console.log(modules);
    
    const blog= await getBlogs(blogId);
    return (
        <div>
            <h1>Blogs</h1>
            {
                <Todo key={blog.id} blog={blog} />
            }
        </div>
    );

    async function getBlogs(blogId : number) {
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${blogId}`);
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