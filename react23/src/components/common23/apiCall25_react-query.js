import axios from 'axios'
import {
    useQuery,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { useState } from 'react';

const queryClient = new QueryClient()

export default function App() {
    const [postId, setPostId] = useState(-1)

    return (
        <QueryClientProvider client={queryClient}>
            <p>
                As you visit the posts below, you will notice them in a loading state
                the first time you load them. However, after you return to this list and
                click on any posts you have already visited again, you will see them
                load instantly and background refresh right before your eyes!{' '}
                <strong>
                    (You may need to throttle your network speed to simulate longer
                    loading sequences)
                </strong>
            </p>
            {postId > -1 ? (
                <div>
                    <div> post greater_than -1 abbaayi </div>
                    <Post postId={postId} setPostId={setPostId} />
                </div>

            ) : (
                <div>
                    <div> post minus -1 anta</div>
                    <Posts setPostId={setPostId} />
                </div>
                
            )}
            <ReactQueryDevtools initialIsOpen />
        </QueryClientProvider>
    )
}

function usePosts() {
    return useQuery({
        queryKey: ['posts'],
        queryFn: async () => {
            const { data } = await axios.get(
                'https://jsonplaceholder.typicode.com/posts',
            )
            return data
        },
    })
}

function Posts({ setPostId }) {
    const queryClient = useQueryClient()
    const { status, data, error, isFetching } = usePosts()

    return (
        <div>
            <h1>Posts_2323</h1>
            <div class="posts_class_23">
                {status === 'loading' ? ('Loading...' ) : 
                    status === 'error' ? (<span>Error: {error.message}</span>) : 
                    (<>
                        <div class="list-of-posts">
                            {data?.map((post) => (
                                <p key={post.id}>
                                    <a
                                        onClick={() => setPostId(post.id)}
                                        href="#"
                                        style={
                                            // We can access the query data here to show bold links for
                                            // ones that are cached
                                            queryClient.getQueryData(['post', post.id])
                                                ? {
                                                    fontWeight: 'bold',
                                                    color: 'green',
                                                }
                                                : {}
                                        }
                                    >
                                        {post?.title}
                                    </a>
                                </p>
                            ))}
                        </div>
                        <div>{isFetching ? 'Background Updating...' : ' '}</div>
                    </>)
                }
            </div>
        </div>
    )
}

const getPostById = async (id) => {
    const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
    )
    return data
}

function usePost(postId) {
    return useQuery({
        queryKey: ['post', postId],
        queryFn: () => getPostById(postId),
        enabled: !!postId,
    })
}

function Post({ postId, setPostId }) {
    const { status, data, error, isFetching } = usePost(postId)

    return (
        <div>
            <div>
                <a onClick={() => setPostId(-1)} href="#">Back</a>
            </div>
            {!postId || status === 'loading' ? ('Loading...' ) : 
                status === 'error' ? ( <span>Error: {error.message}</span> ) : 
                (<>
                    <h1>Title23 === {data?.title}</h1>
                    <div><p>body23 ==== {data?.body}</p></div>
                    <div>{isFetching ? 'Background Updating...' : ' '}</div>
                </>)
            }
        </div>
    )
}