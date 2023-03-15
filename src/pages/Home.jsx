import { Layout } from "../global/style";
import Header from '../components/Header';
import Welcom from '../components/Welcom';
import Search from "../components/Search/index";
import UserInfo from "../components/UserInfo/index";
import Tabs from "../components/Tabs/index";
import Footer from "../components/Footer/index";

const Home = () => {
    return (
        <div>
            <Header />
            <Layout width='80%'>
                <div style={{width:'75%'}}>
                    <Welcom />
                    <Search/>
                    <Tabs />
                </div>

                <UserInfo />
            </Layout>
            <Footer />

        </div>
    )
}

export default Home