import Header from '../components/Header';
import Footer from '../components/Footer';
import { Flex, Text, Button, SVG } from "../global/style";
import Filter from '../components/Search Fillter';
import SearchInput from '../components/Search';
import Dropdown from '../components/Dropdown';
import Job from '../components/Best Matches';

const Search = () => {

    return (
        <Flex direction='column'>
            <Header />
            

                <Flex width='75%' height='auto' margin='3% auto' >
                    {/* Left Side */}
                    <Flex width='25%' height='1700px' direction='column'>
                        <Filter />
                    </Flex>

                    {/* Right Side */}
                    <Flex width='75%' height='1700px' direction='column' border='1px solid #d5e0d5' radius='16px' justif='flex-start' align='flex-start'>
                        <Flex margin='2% auto' width='97%' justif='flex-start' align='center' >
                            <SearchInput />
                            <Button margin='1%' background='none' color='rgb(16, 138, 0)' border='2px solid rgb(16, 138, 0)' width='20%' >Save search</Button>
                        </Flex>

                        <Text padding='15px' color='rgb(16, 138, 0)'>Advanced Search</Text>

                        <Flex width='95%' justif='space-between' align='center'>
                            <Flex justif='flex-start' align='center' width='auto' >
                                <SVG width='4%' fill='rgb(16, 138, 0)' xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 14 14" role="img"><g fill-rule="evenodd"><path d="M0 0c1.756.03 3.845.42 5.462 1.096A13.701 13.701 0 019.32 3.53a13.866 13.866 0 014.473 8.042c.131.752.186 1.667.208 2.428h-2.892c-.02-2.01-.556-4.038-1.593-5.759a10.902 10.902 0 00-3.62-3.67A10.822 10.822 0 001.96 3.072 13.216 13.216 0 000 2.907V0z"></path><path d="M0 4.695c2.343.028 4.542.822 6.28 2.387 1.448 1.304 2.382 2.92 2.817 4.823.146.642.198 1.437.203 2.095H6.551c.001-.531-.118-1.228-.267-1.736-.658-2.242-2.1-3.737-4.317-4.476C1.401 7.6.598 7.516 0 7.51V4.695z"></path><path d="M0 11.921c.025-.135.044-.272.077-.405A1.992 1.992 0 012.087 10a2.01 2.01 0 011.886 1.675 1.994 1.994 0 11-3.94.621L0 12.087v-.166"></path></g></SVG>
                                <Text padding='15px 5px' size='14px' weight='bold' color='rgb(0, 30, 0)'>203,122 <span style={{fontWeight:'400'}} > jobs found</span></Text>
                            </Flex>

                            <Flex justif='space-between' align='center' width='42%' >
                                <Text padding='15px 5px' size='14px' weight='bold' color='rgb(0, 30, 0)'>Sort :</Text>
                                <Dropdown />
                                <Text padding='15px 5px' size='14px' weight='bold' color='rgb(0, 30, 0)'>View :</Text>
                                <Button width='40px' background='none' border='1.5px solid #d5e0d5'>
                                    <SVG width='50%' fill='rgb(16, 138, 0)' xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 14 14" role="img"><path d="M13 1a1 1 0 011 1v.1a1 1 0 01-1 1H1a1 1 0 01-1-1V2a1 1 0 011-1zm0 5a1 1 0 011 1v.1a1 1 0 01-1 1H1a1 1 0 01-1-1V7a1 1 0 011-1zm0 5a1 1 0 011 1v.1a1 1 0 01-1 .9H1a1 1 0 01-1-.95V12a1 1 0 011-1z"></path></SVG>
                                </Button>
                            </Flex>
                        </Flex>

                        <Flex direction='column'>
                            <Job />
                            <Job />
                            <Job />
                            <Job />
                            <Job />
                        </Flex>

                    </Flex>
                </Flex>

            <Footer />
        </Flex>
    )
}

export default Search