import Link from "next/link"
import { Button } from "@/components/ui/button"

const Home = () => {
    return (
        <div className="flex min-h-screen items-center justify-center">
            <Button variant="destructive">
              Click me
            </Button>
            <div>
                Click <Link href="/documents/123">here</Link> to go to document id
            </div>
        </div>
    )
}

export default Home;

