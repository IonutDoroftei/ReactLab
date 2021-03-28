import WelcomePage from "./pages/WelcomePage";
import PeoplePage from "./pages/PeoplePage";
import Books from "./pages/BooksPage";
import TodoApp from "./TodoApp";
import Test from "./pages/Test";

const routes = [
    {
        component: WelcomePage,
        path: "/",
        name: "Welcome"
    },

    {
        component: PeoplePage,
        path: "/people",
        name: "People"
    },

    {
        component: Books,
        path: "/books",
        name: "Books"
    },

    {
        component: TodoApp,
        path: "/todo",
        name: "To do"
    },

    {
        component: Test,
        path: "/tasks",
        name: "Test"
    }
]

export default routes