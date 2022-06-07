import React from 'react';
import Jumbotron from '../jumbotron/index';


import jumbodata from '../../../fixtures/jumbo.json';
const JumbotronContainer =()=>{
    return (
      
        <Jumbotron.Container>
        {
            jumbodata.map((item) => {
                switch (item.id) {
                    case 1:
                        return (
                            <Jumbotron key={item.id} direction={item.direction}>
                                <Jumbotron.Pane>
                                    <Jumbotron.Title>{item.title}</Jumbotron.Title>
                                    <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
                                </Jumbotron.Pane>
                                <Jumbotron.Pane>
                                    <Jumbotron.Image src={item.image} alt={item.alt} />
                                </Jumbotron.Pane>
                            </Jumbotron>
                        )

                    case 2:
                        return (
                            <Jumbotron key={item.id} direction={item.direction}>
                                <Jumbotron.Pane>
                                    <Jumbotron.Title>{item.title}</Jumbotron.Title>
                                    <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
                                </Jumbotron.Pane>
                                <Jumbotron.Pane>
                                    <Jumbotron.Image src={item.image} alt={item.alt} />
                                </Jumbotron.Pane>
                            </Jumbotron>
                        )
                    case 3:
                        return (
                            <Jumbotron key={item.id} direction={item.direction}>
                                <Jumbotron.Pane>
                                    <Jumbotron.Title>{item.title}</Jumbotron.Title>
                                    <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
                                </Jumbotron.Pane>
                                <Jumbotron.Pane>
                                    <Jumbotron.Image src={item.image} alt={item.alt} />
                                </Jumbotron.Pane>
                            </Jumbotron>
                        )
                    case 4:
                        return (
                            <Jumbotron key={item.id} direction={item.direction}>
                                <Jumbotron.Pane>
                                    <Jumbotron.Title>{item.title}</Jumbotron.Title>
                                    <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>

                                </Jumbotron.Pane>
                                <Jumbotron.Pane>
                                    <Jumbotron.Image src={item.image} alt={item.alt} />
                                </Jumbotron.Pane>
                            </Jumbotron>
                        )
                }
            })
        }
    </Jumbotron.Container>
    )
}

export default  JumbotronContainer;
