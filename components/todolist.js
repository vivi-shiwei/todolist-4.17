import React from 'react'
import {
    ThemeProvider,
    CSSReset,
    theme,
    Box,
    Image,
    Text,
    Divider,
    FormLabel,
    FormControl,
    Badge,
    Heading
} from '@chakra-ui/core'
const Todolist = () => (
    <ThemeProvider theme={theme} backgroundColor='gray.100'>
        <CSSReset />
        <Box m='auto' fontSize={["8px", "10px", "15px", "15px"]}>
            <Box display='flex' p={{ sm: 0, md: 10 }} ml={{ sm: 0, md: '15%' }} mr={{ sm: 0, md: '15%' }} backgroundColor={{ sm: 'white', md: 'gray.100' }}>
                <Box width={{ sm: '100%', md: '90%' }} m='auto'>
                    <Box m={{ base: 1, sm: 2, md: 5 }}>
                        <Box m='auto'>
                            <Box display='flex'>
                                <Box display='block'>
                                    <Image height='120px' width='90px' src='/mmexport1580997585391.jpg' />
                                </Box>
                                <Box display='block' ml={{ base: '10px', sm: '15px', md: '20px' }}>
                                    <FormControl display='flex'>
                                        <FormLabel htmlFor='email' fontSize={["sm", "md", "1g"]}>姓名：</FormLabel><Text>陳薇</Text>
                                    </FormControl>
                                    <FormControl display='flex'>
                                        <FormLabel htmlFor='email' fontSize={{ sm: "sm", md: "md" }}>國籍：</FormLabel><Text>中國</Text>
                                    </FormControl>
                                    <FormControl display='flex'>
                                        <FormLabel htmlFor='email' fontSize={["sm", "md", "1g"]}>電話：</FormLabel><Text>13411564215</Text>
                                    </FormControl>
                                    <FormControl display='flex'>
                                        <FormLabel htmlFor='email' fontSize={["sm", "md", "1g"]}>電郵：</FormLabel><Text>2546710985@qq.com</Text>
                                    </FormControl>
                                </Box>
                            </Box>
                        </Box>
                        <Divider borderColor='blackAlpha.500' />
                        <FormControl>
                            <Badge fontSize={{ sm: "md", md: "xl" }} rounded='full' px='2' variantColor='teal'>教育背景</Badge>
                            <Divider borderColor='blackAlpha.500' />
                            <Box display='flex'>
                                <FormLabel htmlFor='email' fontSize={["sm", "md", "1g"]}>在校時間：</FormLabel><Text color='gray.500'>2018.08-2020.03</Text>
                                <FormLabel htmlFor='email' ml='10px' fontSize={["sm", "md", "1g"]}>學校：</FormLabel><Text color='gray.500'>南方it學院</Text>
                                <FormLabel htmlFor='email' ml='10px' fontSize={["sm", "md", "1g"]}>專業：</FormLabel><Text color='gray.500'>軟件工程</Text>
                            </Box>
                            <FormLabel fontSize={["sm", "md", "1g"]}>主修課程：</FormLabel>
                            <Text color='gray.500' mb='10px'>1)熟悉JavaScript客户端脚本技术；</Text>
                            <Text color='gray.500' mb='10px'>2)熟悉Vue.js，BootStrap前端框架;</Text>
                            <Text color='gray.500' mb='10px'>3)熟悉Spring，SpringMVC , Mybatis；</Text>
                            <Text color='gray.500' mb='10px'>4)熟悉 HTML5,CSS3;</Text>
                            <Text color='gray.500' mb='10px'>5)熟悉SQL Server，MySQL数据库系统；</Text>
                            <Text color='gray.500' mb='10px'>6)熟悉 IndexedDB前端数据库；</Text>
                            <Divider borderColor='blackAlpha.500' />
                        </FormControl>
                        <FormControl>
                            <Badge fontSize={{ sm: "md", md: "xl" }} rounded='full' px='2' variantColor='teal'>校内經歷</Badge>
                            <Divider borderColor='blackAlpha.500' />
                            <Box display='flex'>
                                <FormLabel htmlFor='email' fontSize={["sm", "md", "1g"]} mr='30px'>2018.09-2020.2</FormLabel>
                                <FormLabel htmlFor='email' fontSize={["sm", "md", "1g"]} mr='30px'>團委學生會生活部</FormLabel>
                                <FormLabel htmlFor='email' fontSize={["sm", "md", "1g"]}>部員</FormLabel>
                            </Box>
                            <FormLabel fontSize={["sm", "md", "1g"]}>主修課程：</FormLabel>
                            <Text color='gray.500' mb='10px'>⦁认真对待工作，有强烈的团结协作精神，与其它同学协调友好的团结关系，及时反映他们的意见和请求。</Text>
                            <Text color='gray.500' mb='10px'>⦁严于律己，不断提高自己，在生活部开展三月一次的全校寝室长大会中担任两次主持人。</Text>
                            <Text color='gray.500' mb='10px'>⦁义教：就是跟福利院的小朋友一起写字，画画，还有做游戏；</Text>
                            <Text color='gray.500' mb='10px'>⦁献血服务志愿者：工作是发传单、照顾前来献血的志愿者，以及前来咨询的志愿者。发传单是为了让更多的人知道某个地点有献血活动，自己也要了解相关的知识；</Text>
                            <Text color='gray.500' mb='10px'>⦁参加志愿者活动期间，获得斗门区优秀志愿者奖杯。义工时长为１５小时。</Text>
                        </FormControl>
                        <Divider borderColor='blackAlpha.500' />
                        <FormControl>
                            <Badge fontSize={{ sm: "md", md: "xl" }} rounded='full' px='2' variantColor='teal'>自我評價</Badge>
                            <Divider borderColor='blackAlpha.500' />
                            <Text color='gray.500' mb='10px'>作为一个新时代的年轻人，当然活力是一定要有的，我是一个活泼又开朗小姑娘，容易与人相处，善于思考问题，做事认真细心，我待人诚实，没有花言巧语，讲原则，说到做到；有问题不逃避，愿意虚心向他人学习；不以自我为中心；积极进取，综合素质佳，能够吃苦耐劳。知道自己的错误，会认真去改正。</Text>
                            <Divider borderColor='blackAlpha.500' />
                        </FormControl>
                        <FormControl>
                            <Badge fontSize={{ sm: "md", md: "xl" }} rounded='full' px='2' variantColor='teal'>項目經歷</Badge>
                            <Divider borderColor='blackAlpha.500' />
                            <Box display='flex'>
                                <FormLabel htmlFor='email' fontSize={["sm", "md", "1g"]} mr='30px'>項目名稱</FormLabel><Text>圖書管理系統</Text>
                            </Box>
                            <Box display='flex'>
                                <FormLabel htmlFor='email' fontSize={["sm", "md", "1g"]} mr='30px'>開發周期</FormLabel><Text color='gray.500'>2018-11-01至2018-11-28</Text>
                            </Box>
                            <Box display='flex'>
                                <FormLabel htmlFor='email' fontSize={["sm", "md", "1g"]} mr='30px'>開發工具</FormLabel><Text>Microsoft Visual Studio 2017＋SQL server</Text>
                            </Box>

                            <Box>
                                <FormLabel fontSize={["sm", "md", "1g"]}>項目介紹：</FormLabel>
                                <Text color='gray.500' mb='10px'>随着互联网的普及，以及电子书的出现，传统的以纸质文献进行阅读的方式它自由的弊端更加明显地暴露出来：信息检索速度落后，质量较差，不符合当今快节奏的生活方式。图书馆信息管理系统是运行在WINDOWS系统平台上的多任务系统，对书籍及读者进行统一管理的系统。</Text>
                            </Box>
                            <Box>
                                <FormLabel fontSize={["sm", "md", "1g"]}>項目功能：</FormLabel>
                                <Text color='gray.500' mb='10px'>具体包括读者的借书、还书处理；包括增加图书信息、删除和更新图书信息，添加、更新、删除、查询借阅信息、增加读者信息、删除或更新读者信息以及查询读者信息。</Text>
                            </Box>
                            <Box>
                                <FormLabel fontSize={["sm", "md", "1g"]}>項目心得：</FormLabel>
                                <Text color='gray.500' mb='10px'>这次的项目设计用到了很多学到的东西，在某个方面是反映我们的所学的成果。在开发这个系统的过程中，碰到很多的问题，有些是大的，而有些是很小的问题，只是自己没有仔细的看清楚，遇到的问题以后，团队一起讨论，同学互帮互助。在解决了问题后，却是不一样的心情，很有成就感，很充实，因为在解决了问题的同时，我也学到了知识。</Text>
                            </Box>
                            <Box>
                                <FormLabel fontSize={["sm", "md", "1g"]}>登錄界面</FormLabel>
                                <Image src='/AO`5F5(WM5@CCXCYD)Y3HF5.png' />
                            </Box>
                        </FormControl>
                        <Divider borderColor='blackAlpha.500' />
                    </Box>
                </Box>
            </Box>
        </Box>
    </ThemeProvider >
)
export default Todolist
