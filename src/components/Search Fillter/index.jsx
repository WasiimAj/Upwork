import { Flex, Text, Button, SVG, HR, Input } from "../../global/style";
import Accordion from '../Search Accordion';

const index = () => {
    return (
        <Flex width='100%' height='100%' direction='column'>
        <Text size='22px' weight='500' color='rgb(0, 30, 0)' padding='0 5px'>
            Filter By
        </Text>

        <Accordion 
            title='Experience level' 
            children=   {   
                            <Flex width='100%' align='flex-start' justify='flex-start' direction='column'>
                                <Flex width='100%' align='center' justify='flex-start' > 
                                    <Input margin='2.5% 0' type='checkbox' width='20px' height='20px' /> 
                                    <Text size='14px' color='rgb(0, 30, 0)' weight='400' padding='0 15px'>
                                        Entry Level  <Text style={{display:'inline-block'}} size='12px' color=' rgb(94, 109, 85)'>(25651)</Text> 
                                    </Text> 
                                </Flex> 
                                <Flex width='100%' align='center' justify='flex-start' > 
                                    <Input margin='2.5% 0' type='checkbox' width='20px' height='20px' /> 
                                    <Text size='14px' color='rgb(0, 30, 0)' weight='400' padding='0 15px'>
                                        Intermediate  <Text style={{display:'inline-block'}} size='12px' color=' rgb(94, 109, 85)'>(110763)</Text> 
                                    </Text> 
                                </Flex> 
                                <Flex width='100%' align='center' justify='flex-start' > 
                                    <Input margin='2.5% 0' type='checkbox' width='20px' height='20px' /> 
                                    <Text size='14px' color='rgb(0, 30, 0)' weight='400' padding='0 15px'>
                                        Expert <Text style={{display:'inline-block'}} size='12px' color=' rgb(94, 109, 85)'>(65917)</Text> 
                                    </Text> 
                                </Flex> 
                            </Flex>
                        } 
        />

        <Accordion 
            title='Job type' 
            children=   {   
                            <Flex width='100%' align='flex-start' justify='flex-start' direction='column'>
                                <Flex width='100%' align='center' justify='flex-start' > 
                                    <Input margin='2.5% 0' type='checkbox' width='20px' height='20px' /> 
                                    <Text size='14px' color='rgb(0, 30, 0)' weight='400' padding='0 15px'>
                                        Hourly   <Text style={{display:'inline-block'}} size='12px' color=' rgb(94, 109, 85)'>(11681)</Text> 
                                    </Text> 
                                </Flex> 
                                <Flex width='100%' align='center' justify='flex-start' > 
                                    <Input margin='2.5% 0' type='checkbox' width='20px' height='20px' /> 
                                    <Text size='14px' color='rgb(0, 30, 0)' weight='400' padding='0 15px'>
                                        Fixed-Price   <Text style={{display:'inline-block'}} size='12px' color=' rgb(94, 109, 85)'>(13968)</Text> 
                                    </Text> 
                                </Flex> 
                            </Flex>
                        } 
        />

        <Accordion 
            title='Number of proposals' 
            children=   {   
                            <Flex width='100%' align='flex-start' justify='flex-start' direction='column'>
                                <Flex width='100%' align='center' justify='flex-start' > 
                                    <Input margin='2.5% 0' type='checkbox' width='20px' height='20px' /> 
                                    <Text size='14px' color='rgb(0, 30, 0)' weight='400' padding='0 15px'>
                                        Less than 5    <Text style={{display:'inline-block'}} size='12px' color=' rgb(94, 109, 85)'>(4183)</Text> 
                                    </Text> 
                                </Flex> 
                                <Flex width='100%' align='center' justify='flex-start' > 
                                    <Input margin='2.5% 0' type='checkbox' width='20px' height='20px' /> 
                                    <Text size='14px' color='rgb(0, 30, 0)' weight='400' padding='0 15px'>
                                        5 to 10 <Text style={{display:'inline-block'}} size='12px' color=' rgb(94, 109, 85)'>(4771)</Text> 
                                    </Text> 
                                </Flex> 
                                <Flex width='100%' align='center' justify='flex-start' > 
                                    <Input margin='2.5% 0' type='checkbox' width='20px' height='20px' /> 
                                    <Text size='14px' color='rgb(0, 30, 0)' weight='400' padding='0 15px'>
                                        10 to 15     <Text style={{display:'inline-block'}} size='12px' color=' rgb(94, 109, 85)'>(3467)</Text> 
                                    </Text> 
                                </Flex> 
                                <Flex width='100%' align='center' justify='flex-start' > 
                                    <Input margin='2.5% 0' type='checkbox' width='20px' height='20px' /> 
                                    <Text size='14px' color='rgb(0, 30, 0)' weight='400' padding='0 15px'>
                                        15 to 20  <Text style={{display:'inline-block'}} size='12px' color=' rgb(94, 109, 85)'>(2578)</Text> 
                                    </Text> 
                                </Flex> 
                                <Flex width='100%' align='center' justify='flex-start' > 
                                    <Input margin='2.5% 0' type='checkbox' width='20px' height='20px' /> 
                                    <Text size='14px' color='rgb(0, 30, 0)' weight='400' padding='0 15px'>
                                        20 to 50   <Text style={{display:'inline-block'}} size='12px' color=' rgb(94, 109, 85)'>(1577)</Text> 
                                    </Text> 
                                </Flex> 
                            </Flex>
                        } 
        />

        <Accordion 
            title='Client info' 
            children=   {   
                            <Flex width='100%' align='flex-start' justify='flex-start' direction='column'>
                                <Flex width='100%' align='center' justify='flex-start' > 
                                    <Input margin='2.5% 0' type='checkbox' width='20px' height='20px' /> 
                                    <Text size='14px' color='rgb(0, 30, 0)' weight='400' padding='0 15px'>
                                        My previous clients    <Text style={{display:'inline-block'}} size='12px' color=' rgb(94, 109, 85)'>(0)</Text> 
                                    </Text> 
                                </Flex> 
                                <Flex width='100%' align='center' justify='flex-start' > 
                                    <Input margin='2.5% 0' type='checkbox' width='20px' height='20px' /> 
                                    <Text size='14px' color='rgb(0, 30, 0)' weight='400' padding='0 15px'>
                                        Payment verified   <Text style={{display:'inline-block'}} size='12px' color=' rgb(94, 109, 85)'>(4807)</Text> 
                                    </Text> 
                                </Flex> 
                            </Flex>
                        } 
        />

    <Accordion 
            title='Client history' 
            children=   {   
                            <Flex width='100%' align='flex-start' justify='flex-start' direction='column'>
                                <Flex width='100%' align='center' justify='flex-start' > 
                                    <Input margin='2.5% 0' type='checkbox' width='20px' height='20px' /> 
                                    <Text size='14px' color='rgb(0, 30, 0)' weight='400' padding='0 15px'>
                                        No hires   <Text style={{display:'inline-block'}} size='12px' color=' rgb(94, 109, 85)'>(2750)</Text> 
                                    </Text> 
                                </Flex> 
                                <Flex width='100%' align='center' justify='flex-start' > 
                                    <Input margin='2.5% 0' type='checkbox' width='20px' height='20px' /> 
                                    <Text size='14px' color='rgb(0, 30, 0)' weight='400' padding='0 15px'>
                                        1 to 9 hires   <Text style={{display:'inline-block'}} size='12px' color=' rgb(94, 109, 85)'>(1385)</Text> 
                                    </Text> 
                                </Flex> 
                                <Flex width='100%' align='center' justify='flex-start' > 
                                    <Input margin='2.5% 0' type='checkbox' width='20px' height='20px' /> 
                                    <Text size='14px' color='rgb(0, 30, 0)' weight='400' padding='0 15px'>
                                        10+ hires  <Text style={{display:'inline-block'}} size='12px' color=' rgb(94, 109, 85)'>(2806)</Text> 
                                    </Text> 
                                </Flex>
                            </Flex>
                        } 
        />

        <Accordion 
            title='Client location' 
            children=   {   
                            <Flex width='100%' align='center' justify='center'>
                                <Input width='80%' height='30px' radius='50px' placeholder='Select client location'/>
                            </Flex>
                        } 
        />
        <Accordion 
            title='Client time zones' 
            children=   {   
                            <Flex width='100%' align='center' justify='center'>
                                <Input width='80%' height='30px' radius='50px' placeholder='Select client time zones'/>
                            </Flex>
                        } 
        />

        <Accordion 
            title='Project length' 
            children=   {   
                            <Flex width='100%' align='flex-start' justify='flex-start' direction='column'>
                                <Flex width='100%' align='center' justify='flex-start' > 
                                    <Input margin='2.5% 0' type='checkbox' width='20px' height='20px' /> 
                                    <Text size='14px' color='rgb(0, 30, 0)' weight='400' padding='0 15px'>
                                        Less than one month<Text style={{display:'inline-block'}} size='12px' color=' rgb(94, 109, 85)'>(1336)</Text> 
                                    </Text> 
                                </Flex> 
                                <Flex width='100%' align='center' justify='flex-start' > 
                                    <Input margin='2.5% 0' type='checkbox' width='20px' height='20px' /> 
                                    <Text size='14px' color='rgb(0, 30, 0)' weight='400' padding='0 15px'>
                                        1 to 3 months   <Text style={{display:'inline-block'}} size='12px' color=' rgb(94, 109, 85)'>(748)</Text> 
                                    </Text> 
                                </Flex> 
                                <Flex width='100%' align='center' justify='flex-start' > 
                                    <Input margin='2.5% 0' type='checkbox' width='20px' height='20px' /> 
                                    <Text size='14px' color='rgb(0, 30, 0)' weight='400' padding='0 15px'>
                                        3 to 6 months  <Text style={{display:'inline-block'}} size='12px' color=' rgb(94, 109, 85)'>(516)</Text> 
                                    </Text> 
                                </Flex>
                                <Flex width='100%' align='center' justify='flex-start' > 
                                    <Input margin='2.5% 0' type='checkbox' width='20px' height='20px' /> 
                                    <Text size='14px' color='rgb(0, 30, 0)' weight='400' padding='0 15px'>
                                        More than 6 months  <Text style={{display:'inline-block'}} size='12px' color=' rgb(94, 109, 85)'>(745)</Text> 
                                    </Text> 
                                </Flex>
                            </Flex>
                        } 
        />


        <Accordion 
            title='Hours per week' 
            children=   {   
                            <Flex width='100%' align='flex-start' justify='flex-start' direction='column'>
                                <Flex width='100%' align='center' justify='flex-start' > 
                                    <Input margin='2.5% 0' type='checkbox' width='20px' height='20px' /> 
                                    <Text size='14px' color='rgb(0, 30, 0)' weight='400' padding='0 15px'>
                                        Less than 30 hrs/week<Text style={{display:'inline-block'}} size='12px' color=' rgb(94, 109, 85)'>(2539)</Text> 
                                    </Text> 
                                </Flex> 
                                <Flex width='100%' align='center' justify='flex-start' > 
                                    <Input margin='2.5% 0' type='checkbox' width='20px' height='20px' /> 
                                    <Text size='14px' color='rgb(0, 30, 0)' weight='400' padding='0 15px'>
                                        More than 30 hrs/week <Text style={{display:'inline-block'}} size='12px' color=' rgb(94, 109, 85)'>(624)</Text> 
                                    </Text> 
                                </Flex> 
                            </Flex>
                        } 
        />

    <Accordion 
            title='Connects needed' 
            children=   {   
                            <Flex width='100%' align='flex-start' justify='flex-start' direction='column'>
                                <Flex width='100%' align='center' justify='flex-start' > 
                                    <Input margin='2.5% 0' type='checkbox' width='20px' height='20px' /> 
                                    <Text size='14px' color='rgb(0, 30, 0)' weight='400' padding='0 15px'>
                                        2 or less connects<Text style={{display:'inline-block'}} size='12px' color=' rgb(94, 109, 85)'>(854)</Text> 
                                    </Text> 
                                </Flex> 
                                <Flex width='100%' align='center' justify='flex-start' > 
                                    <Input margin='2.5% 0' type='checkbox' width='20px' height='20px' /> 
                                    <Text size='14px' color='rgb(0, 30, 0)' weight='400' padding='0 15px'>
                                        4 connects <Text style={{display:'inline-block'}} size='12px' color=' rgb(94, 109, 85)'>(2678)</Text> 
                                    </Text> 
                                </Flex> 
                                <Flex width='100%' align='center' justify='flex-start' > 
                                    <Input margin='2.5% 0' type='checkbox' width='20px' height='20px' /> 
                                    <Text size='14px' color='rgb(0, 30, 0)' weight='400' padding='0 15px'>                                      
                                        6 connects <Text style={{display:'inline-block'}} size='12px' color=' rgb(94, 109, 85)'>(1818)</Text> 
                                    </Text> 
                                </Flex> 
                            </Flex>
                        } 
        />

                            <Flex margin='5% auto' width='100%' align='center' justify='flex-start' > 
                                    <Input margin='0' type='checkbox' width='20px' height='20px' /> 
                                    <Text size='14px' color='rgb(0, 30, 0)' weight='400' padding='0 15px'>                                      
                                        Contract-to-hire roles <Text style={{display:'inline-block'}} size='12px' color=' rgb(94, 109, 85)'>(1894)</Text> 
                                    </Text> 
                                </Flex> 

    </Flex>


    )
}

export default index;