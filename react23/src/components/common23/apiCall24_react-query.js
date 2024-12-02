import { QueryClient, QueryClientProvider, useQuery, } from "@tanstack/react-query";
const queryClient = new QueryClient()

export default function Example23() {

    return (
        <QueryClientProvider client={queryClient}>
          <What_is_Happening />
        </QueryClientProvider>
      )
}

function What_is_Happening() {
    const { isPending, error, data } = useQuery({
        queryKey: ['repoData'], // cache key
        queryFn: () =>
            fetch('https://api.github.com/repos/gopal-sakshi/testing_backend').then((res) =>
                res.json(),
            ),
    })

    if (isPending) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

    return (
        <div>
            <h1>{data.name}</h1>
            <p>{data.description}</p>
            <div>full_name23 ===== {data.full_name}</div>
            <div>Subscribers23 === {data.subscribers_count}</div>{' '}
            <div>Stargazers23 ==== {data.stargazers_count}</div>{' '}
            <div>forks23 ===== {data.forks_count}</div>
        </div>
    )
}