import React, { FC } from 'react';

import Sandwatch from "../../assets/images/sandwatch.svg";
import Message from "../../assets/images/message.svg";

import { Button, Progress } from "antd";

import './loading.scss';
import useTranslations from '../../config/i18n/useTranslations';

type Props = {
    setShowContactUs: (value: boolean) => void;
}

const Loading: FC<Props> = (props: Props) => {
    const msgs = useTranslations();

    return (
        <div className="gtera-wrapper col-md-10 m-auto">
            <div className="waiting">
                <div>
                    <h3>{msgs.home.title}</h3>
                    <h1>{msgs.home.subtitle}</h1>
                    <h4>
                        <span className="arrow">{`<`}</span>
                        <p>
                            {msgs.home.discription}
                        </p>
                        <span className="arrow">{`/>`}</span>

                        <Button
                            onClick={() => props.setShowContactUs(true)}
                            className="contact-us-btn"
                        >
                            <img src={Message} />
                            <span className="btn-text">{msgs.home.contactUs}</span>
                        </Button>
                    </h4>

                    <Progress
                        strokeColor={{
                            "0%": "#384B5E",
                            "100%": "#EC5F60",
                        }}
                        percent={20}
                    />
                </div>

                <div className="sandwatch-icon">
                    <img src={Sandwatch} />
                </div>
            </div>
        </div>
    )
}

export default Loading;