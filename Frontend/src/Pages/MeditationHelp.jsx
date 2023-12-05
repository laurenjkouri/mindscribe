import MeditationAdvice from "../Components/MeditationRecommendation/Meditation";
import './MeditationHelp.css'
import { useNavigate } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown'
import { supabase } from '../database.js';
import React, { useState } from 'react';

const meditationTypes = {
    "Mindfulness Meditation" : "Mindfulness meditation, deeply rooted in Buddhist traditions, stands as one of the most extensively studied and practiced forms of meditation in Western culture. During mindfulness meditation, the focus is on gently acknowledging your thoughts as they drift across the landscape of your mind. The key is to engage in observation without judgment, without attaching to or getting entangled in these thoughts. It’s about noticing and recognizing patterns as they emerge. This method is a blend of focus and open awareness. It can be beneficial to center your attention on a specific object or the rhythm of your breathing. As you do this, you become an observer of the sensations in your body, the flow of your thoughts, and the emotions you experience. Mindfulness meditation is particularly suitable for those who are navigating the path of meditation on their own, as it doesn’t necessarily require the guidance of a teacher and can be effectively practiced solo.",
    "Spiritual Meditation" : "Spiritual meditation is a cornerstone across various religions and spiritual paths worldwide. This form of meditation encompasses a wide array of practices, each unique to its respective spiritual or religious tradition. Many meditation techniques mentioned in this article can fall under the umbrella of spiritual meditation. A 2017 research study highlights that spiritual meditation aims at nurturing a profound understanding and connection with a higher spiritual realm or power. Some notable examples include Christian Contemplative Prayer, the Sufi practice of Dhikr, which involves the remembrance of God, and Jewish Kabbalistic methods. One can engage in spiritual meditation either in the tranquility of one's home or within the sacred space of a place of worship. It is especially enriching for individuals seeking spiritual deepening and a stronger connection with a transcendent force or presence.",
    "Focused Meditation" : "Focused meditation is a practice that harnesses concentration through any of the five senses. This technique allows for focusing on internal elements, such as the rhythm of your breathing, or incorporating external aids to assist in maintaining focus. While the concept of focused meditation might seem straightforward, maintaining concentration can be challenging for beginners, often finding it hard to stay focused for extended periods initially. Should you find your mind wandering, gently guide it back to the chosen focus point. This process of returning to focus is part of the practice. Focused meditation is particularly effective for those looking to enhance their concentration and attention skills.",
    "Movement Meditation" : "While yoga often comes to mind first when discussing movement meditation, this dynamic practice can encompass a variety of activities, including: Walking meditation, engaging in gardening and other forms of mindful movement. Movement meditation is a vibrant form of meditation where each motion steers you towards a deeper communion with your body and the immediate present. This type of meditation is particularly suited for those who find solace in activity and wish to cultivate a heightened sense of bodily awareness.",
    "Mantra Meditation" : "Mantra meditation, a key element in both Hindu and Buddhist teachings, employs the use of repetitive sounds or phrases to clear and calm the mind. A classic example of a mantra is the resonant om. The mantra can be articulated loudly or whispered softly. As you engage in this chant, you gradually become more alert and in sync with your surroundings, paving the way to deeper levels of consciousness. Many find mantra meditation appealing because it offers a tangible focus - a word or sound - which some find easier to concentrate on than their breathing. The physical sensation of the mantra's vibration can also be a grounding and centering experience. This practice is particularly beneficial for those who prefer auditory stimulation and rhythmic repetition over silence.",
    "Loving-Kindness Meditation" : "Loving-kindness meditation is a heartfelt practice designed to enhance sentiments of empathy, benevolence, and self-acceptance, as well as to extend these feelings towards others. The practice usually starts with cultivating an openness to absorb love and positive energy from those around you. Subsequently, it involves directing thoughts of goodwill and care towards family, friends, acquaintances, and ultimately, all beings. Given its emphasis on fostering a compassionate and forgiving outlook, this meditation form is particularly beneficial for individuals grappling with feelings of anger or resentment.",
}

const MeditationHelp = () => {
    const [selectedMeditationType, setSelectedMeditationType] = useState('');
    const navigate = useNavigate();

    const navigateTo = (path) => {
        navigate(path);
    };

    const handleSignOut = async () => {
        try {
            const { error } = await supabase.auth.signOut();
            if (error) throw error;
            navigate('/login');
        } catch (error) {
            console.error('Error signing out: ', error);
        }
    };

    const handleMeditationTypeChange = (event) => {
        setSelectedMeditationType(event.target.value);
    };

    return (
        <div>
            <Dropdown>
            <Dropdown.Toggle variant="" className="button-60">
                More
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item onClick={() => navigateTo('/home')}>Home</Dropdown.Item>
                <Dropdown.Item onClick={() => navigateTo('/help')}>Help</Dropdown.Item>
                <Dropdown.Item onClick={() => navigateTo('/technicaldocument')}>About the Site</Dropdown.Item>
                <Dropdown.Item onClick={handleSignOut}>Sign Out</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
            <div className="grid-container2">
            <div className="itemblah">
            <MeditationAdvice />
            </div>
            <div className="itemblahblah">
            <p>Choose a meditation type for your practice.</p>
            <div className="select">
                <select onChange={handleMeditationTypeChange} value={selectedMeditationType}>
                    <option value="">Select Meditation Type</option>
                    {Object.keys(meditationTypes).map(type => (
                        <option key={type} value={type}>{type}</option>
                    ))}
                </select>
            </div>

            <div className="meditation-type">
                <p>{meditationTypes[selectedMeditationType]}</p>
            </div>
        </div>
            </div>
        </div>
    );
}

export default MeditationHelp;