import React from 'react';
import ChangeableContentDiv from './components/ChangeableContentDiv';
import './styles/background.css';
import './styles/genshin-zodiac.css';

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            contentId: 'Genshin Zodiac',
            contentDescription: "Which Genshin Impact character are you? Enter your birthday or click on any character's avatar to find out!",
            imgSrc: '',
            isHomepage: true,
            inputValue: '',
            activeButton: '',
        }
        this.contentId = this.changeContentId.bind(this);
        this.handleHelp = this.handleHelp.bind(this);
        this.handleExit = this.handleExit.bind(this);
        this.checkValidDate = this.checkValidDate.bind(this);
        this.userInfo = this.userInfo.bind(this);
    }

    changeContentId(id){
        if(id === 'gemini'){
            this.setState({
                contentId: 'Fischl',
                contentDescription: "Geminis are gentle, curious, and adaptable. These are the traits that greatly represent Fischl. Fischl is a mysterious girl who travels with a night raven named Oz. She serves as an investigator in the Adventurers' Guild. Through her unique abilities, eccentric character, and hard work, Fischl has become a rising star among the Adventurers' Guild's investigators, earning the recognition of all.",
                imgSrc: './images/character-posters/fischl.jpg',
                isHomepage: false,
                activeButton: 'gemini',
            })
        }
        else if(id === 'aquarius'){
            this.setState({
                contentId: 'Beidou',
                contentDescription: 'Aquarius are independent, progressive, original, and rebellious, which are the exact traits of Beidou. Beidou is considered to be one of the strongest women in Liyue as she is the captain of the Crux Fleet. Children look up to Beidou for her strengths, and criminals fear her wrath. She is incredibly well-versed in survival but is also more than happy to sit down and have a drink with friends.',
                imgSrc: './images/character-posters/beidou.jpg',
                isHomepage: false,
                activeButton: 'aquarius',
            })
        }
        else if(id === 'scorpio'){
            this.setState({
                contentId: 'Keqing',
                contentDescription: 'Scorpios are passionate, brave, determined, and ambitious, which are all Keqing’s notable traits. Keqing is a workaholic, demanding herself to work "ten times harder than the average human." She also has a strong sense of responsibility and will not stop until a task has been completed perfectly - and by her standards, that means everything related to that task is also resolved.',
                imgSrc: './images/character-posters/keqing.jpg',
                isHomepage: false,
                activeButton: 'scorpio',
            })
        }
        else if(id === 'aries'){
            this.setState({
                contentId: 'Noelle',
                contentDescription: 'Aries are willful, courageous, independent, and idealist. This represents Noelle greatly. Noelle has much greater dreams and ambitions than other maids in the Knights of Favonius. Just like everyone in the city of Mondstadt, she dreams of becoming a knight and donning the honored armor. Even if her skills are not enough to pass the rigorous selection trials, she still not gives up and keeps trying her hardest.',
                imgSrc: './images/character-posters/noelle.jpg',
                isHomepage: false,
                activeButton: 'aries',
            })
        }
        else if(id === 'capricorn'){
            this.setState({
                contentId: 'Zhongli',
                contentDescription: "Capricorns are responsible, discipline, and good-mannered. None other in Genshin Impact fits this description better than Zhongli. Zhongli is a character who is well versed in Liyue’s history and culture. He holds very philosophical ideas towards money and has great respect for Liyue's traditions. Despite being the Geo archon, Zhongli is extremely humble and deeply cares for his country.",
                imgSrc: './images/character-posters/zhongli.jpg',
                isHomepage: false,
                activeButton: 'capricorn',
            })
        }
        else if(id === 'virgo'){
            this.setState({
                contentId: 'Ningguang',
                contentDescription: 'Virgos are analytic, hard-working, and practical, and Ningguang is a perfect example of a typical Virgo. Ningguang is an entrepreneur with a great head on her shoulders. She started from the bottom and worked her way up to being one of the most powerful women in Liyue. She has bold ambitions, but she does not let them get in the way when the safety of Liyue is challenged.',
                imgSrc: './images/character-posters/ningguang.jpg',
                isHomepage: false,
                activeButton: 'virgo',
            })
        }
        else if(id === 'pisces'){
            this.setState({
                contentId: 'Qiqi',
                contentDescription: 'Pisces are intuitive, gentle, compassionate, and sensitive. These pretty much describe Qiqi. Qiqi is extremely hard working, despite the fact that she is a zombie. She is great with herbs and is incredibly diligent when trying to find plants and has a notebook to keep up with her memories. Qiqi is innocent and is able to heal those around her even in the middle of a tough battle.',
                imgSrc: './images/character-posters/qiqi.jpg',
                isHomepage: false,
                activeButton: 'pisces',
            })
        }
        else if(id === 'sagittarius'){
            this.setState({
                contentId: 'Kaeya',
                contentDescription: 'Sagittarius are idealistic, unstoppable, generous, and open-minded, much like Kaeya. Kaeya is a confident and charming individual with a flair for the dramatic. He enjoys putting his enemies and allies into high-stress situations and challenging their values. He also seems to get a kick out of telling bald-faced lies, but this tendency becomes a talent when it comes to his role as the brains of the Knights of Favonius.',
                imgSrc: './images/character-posters/kaeya.jpg',
                isHomepage: false,
                activeButton: 'sagittarius',
            })
        }
        else if(id === 'taurus'){
            this.setState({
                contentId: 'Diluc',
                contentDescription: 'Taurus are reliable, practical, and responsible, and none other character in Genshin Impact represents a Taurus better than Diluc. As the wealthiest gentleman in Mondstadt, Diluc always presents himself as the epitome of perfection. But behind the courteous visage burns a zealous soul that has sworn to protect Mondstadt at all costs, allowing him to mercilessly vanquish all those who threaten his city.',
                imgSrc: './images/character-posters/diluc.jpg',
                isHomepage: false,
                activeButton: 'taurus',
            })
        }
        else if(id === 'leo'){
            this.setState({
                contentId: 'Amber',
                contentDescription: "Leos are cheerful, passionate, and outgoing, just like Amber. A righteous and accomplished knight, she fulfills her duties and does things by the Knights of Favonius handbook. She is charismatic and friendly, and she has no problem talking to strangers as if she's already acquainted with them. She is passionate in all things she does, be it when it comes to helping others or taking out hilichurl camps.",
                imgSrc: './images/character-posters/amber.jpg',
                isHomepage: false,
                activeButton: 'leo',
            })
        }
        else if(id === 'libra'){
            this.setState({
                contentId: 'Xingqiu',
                contentDescription: 'Libras are diplomatic, gracious, social, and fair-minded, which are all the traits that Xingqiu possesses. Xingqiu is one of the most studious characters in the game. When he is first encountered, he is busy trying to find a book. While his main focus does seem to be on reading, he also is able to manage large business transactions with ease due to his calm demeanor and excellent bargaining skills.',
                imgSrc: './images/character-posters/xingqiu.jpg',
                isHomepage: false,
                activeButton: 'libra',
            })
        }
        else if(id === 'cancer'){
            this.setState({
                contentId: 'Tartaglia',
                contentDescription: 'Cancers are caring and protective, which all fit Tartaglia too well. He is self-confident, solipsistic, and thriving on the sensation of being alive. Tartaglia is extremely reliable at accomplishing the tasks given to him, no matter how difficult they may be. Towards those he cares about, he dedicates himself to them wholeheartedly. He cares deeply for his family and is completely loyal to the Tsaritsa.',
                imgSrc: './images/character-posters/tartaglia.jpg',
                isHomepage: false,
                activeButton: 'cancer',
            })
        }
    }

    handleHelp(){
        if(this.state.contentId !== 'Help'){
            this.setState({
                contentId: 'Help',
                contentDescription: 'Each zodiac sign shares some special traits with a character in Genshin Impact. To find out which character are you, either click on a character’s avatar, or enter a valid birthday in the form of mm/dd/yyyy and click submit (or hit Return/Enter). To return to the main menu, click on the exit button',
                imgSrc: './images/character-posters/paimon.jpg',
                isHomepage: false,
                activeButton: 'help',
            })
        }
    }

    handleExit(){
        if(this.state.contentId !== 'Genshin Zodiac'){
            this.setState({
                contentId: 'Genshin Zodiac',
                contentDescription: "Which Genshin Impact character are you? Enter your birthday or click on any character's avatar to find out!",
                imgSrc: '',
                isHomepage: true,
                activeButton: '',
            })
        }
    }

    checkValidDate(){
        let birthday = new Date(document.getElementById('date').value)

        if(birthday.toString() === 'Invalid Date'){
            alert('You must enter a valid birthday!');
        }
        else{
            let day = birthday.getUTCDate();
            let month = birthday.getUTCMonth() + 1;
            this.userInfo(day, month);
        }
    }

    userInfo(day, month){
        let sign = '';
    
        if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
            sign = "capricorn";
        } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
            sign = "sagittarius";
        } else if ((month === 10 && day >= 24) || (month === 11 && day <= 21)) {
            sign = "scorpio";
        } else if ((month === 9 && day >= 23) || (month === 10 && day <= 23)) {
            sign = "libra";
        } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
            sign = "virgo";
        } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
            sign = "leo";
        } else if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) {
            sign = "cancer";
        } else if ((month === 5 && day >= 21) || (month === 6 && day <= 21)) {
            sign = "gemini";
        } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
            sign = "taurus";
        } else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
            sign = "aries";
        } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
            sign = "pisces";
        } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
            sign = "aquarius";
        }

        this.changeContentId(sign);
    }

    render(){
        return(
            <div id="genshin-zodiac">
                <p id="warning">Sorry, this application is not supported in the current browser, please try open the application in Google Chrome or Firefox.</p>
                <main>
                    <div id="zodiac-button-list">
                        <button 
                            id="gemini" 
                            className="buttons zodiac-buttons" 
                            style={this.state.activeButton === 'gemini' ? {opacity: 100} : {}} 
                            onClick={() => this.changeContentId('gemini')}
                        ></button>
                        <button 
                            id="aquarius" 
                            className="buttons zodiac-buttons in-between" 
                            style={this.state.activeButton === 'aquarius' ? {opacity: 100} : {}}
                            onClick={() => this.changeContentId('aquarius')}
                        ></button>
                        <button 
                            id="scorpio" 
                            className="buttons zodiac-buttons in-between" 
                            style={this.state.activeButton === 'scorpio' ? {opacity: 100} : {}}
                            onClick={() => this.changeContentId('scorpio')}
                        ></button>
                        <button 
                            id="aries" 
                            className="buttons zodiac-buttons in-between"
                            style={this.state.activeButton === 'aries' ? {opacity: 100} : {}}
                            onClick={() => this.changeContentId('aries')}
                        ></button>
                        <button 
                            id="capricorn" 
                            className="buttons zodiac-buttons in-between"
                            style={this.state.activeButton === 'capricorn' ? {opacity: 100} : {}}
                            onClick={() => this.changeContentId('capricorn')}
                        ></button>
                        <button 
                            id="virgo" 
                            className="buttons zodiac-buttons"
                            style={this.state.activeButton === 'virgo' ? {opacity: 100} : {}}
                            onClick={() => this.changeContentId('virgo')}
                        ></button>
                        <button 
                            id="pisces" 
                            className="buttons zodiac-buttons"
                            style={this.state.activeButton === 'pisces' ? {opacity: 100} : {}}
                            onClick={() => this.changeContentId('pisces')}
                        ></button>
                        <button 
                            id="sagittarius"
                            className="buttons zodiac-buttons in-between"
                            style={this.state.activeButton === 'sagittarius' ? {opacity: 100} : {}}
                            onClick={() => this.changeContentId('sagittarius')}
                        ></button>
                        <button 
                            id="taurus" 
                            className="buttons zodiac-buttons in-between"
                            style={this.state.activeButton === 'taurus' ? {opacity: 100} : {}}
                            onClick={() => this.changeContentId('taurus')}
                        ></button>
                        <button 
                            id="leo" 
                            className="buttons zodiac-buttons in-between"
                            style={this.state.activeButton === 'leo' ? {opacity: 100} : {}}
                            onClick={() => this.changeContentId('leo')}
                        ></button>
                        <button 
                            id="libra"
                            className="buttons zodiac-buttons in-between"
                            style={this.state.activeButton === 'libra' ? {opacity: 100} : {}}
                            onClick={() => this.changeContentId('libra')}
                        ></button>
                        <button 
                            id="cancer"
                            className="buttons zodiac-buttons"
                            style={this.state.activeButton === 'cancer' ? {opacity: 100} : {}}
                            onClick={() => this.changeContentId('cancer')}
                        ></button>
                    </div>

                    <div id="control-button-list">
                        <div>
                            <button 
                                id="help"
                                className="buttons control-buttons"
                                style={this.state.activeButton === 'help' ? {opacity: 100} : {}}
                                onClick={this.handleHelp}
                            ></button>
                            <button 
                                id="exit"
                                className="buttons control-buttons"
                                onClick={this.handleExit}
                            ></button>
                        </div>
                    </div>

                    <div id="changeable-content-div">
                        <ChangeableContentDiv contentId={this.state.contentId} contentDescription={this.state.contentDescription} imgSrc={this.state.imgSrc}/>
                        {this.state.isHomepage ? 
                        <div id="input">
                            <input type="date" id="date"/>
                            <input type="submit" value="SUBMIT" id="submit" onClick={this.checkValidDate}/>
                        </div> 
                        :null}
                    </div>
                </main>
            </div>
        )
    }
}

export default App;
