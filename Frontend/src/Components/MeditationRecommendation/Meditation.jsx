import React, { useState } from 'react';
import './Meditation.css';

const breathingExercises = {
    "Are you a beginner?": "Begin your journey into breathing exercises with this fundamental technique. Gently draw air in through your nose, counting silently to yourself, 1. Then, exhale slowly through your mouth, counting, 2. Continue this pattern: inhale through the nose for 3, exhale through the mouth for 4, and once more breathe in for 5. This simple practice of counting breaths helps ground your focus and brings a sense of calm.",
    "Is your mind racing?": "When your thoughts race, finding tranquility can be as simple as adjusting your breathing pattern. Focus on making your out-breaths longer than your in-breaths, which can help slow down both your heartbeat and mind. Start by inhaling gently through your nose for a count of 3, then smoothly exhale through your mouth for a count of 6. If you find the counts of 3 and 6 too challenging initially, try inhaling for 2 counts and exhaling for 4. Alternatively, for a deeper relaxation, increase the duration by inhaling for 4 counts and exhaling for 8.",
    "Feeling anxious?": "When feelings of anxiety arise, belly breathing can be a powerful tool to restore calm. While this technique doesn't literally involve breathing into the stomach, you will notice your belly expanding as your lungs fill with air. A helpful tip is to place your hand on your abdomen to feel its rise and fall with each breath. Inhale slowly and deeply through your nose, allowing your belly to gently push outward. Then, exhale at the same gentle pace through your mouth, feeling your belly naturally draw inward. This method of breathing can create a soothing rhythm, helping to alleviate anxious feelings.",
    "Need to focus?" : "Try box breathing. For this breathing exercise, it might be helpful to imagine a box and its 4 equal sides. See it? This visualization will help us breathe and hold our breath for the same number of counts while we trace one corner to the next in our minds, all the way around the box. Taking slow, deep breaths, inhale through nose for 4, hold the breath for 4, exhale through the mouth for 4, and hold the breath for 4 before we inhale again.",
    "Feeling overwhelmed?" : "Experience the Calm of Alternate Nostril Breathing. In moments of intensity, engage in the ancient practice of Nadi Shodhana, also known as alternate nostril breathing. This technique is revered for harmonizing the brain's hemispheres, fostering a sense of serenity. Begin in a seated position with a straight back and relaxed shoulders. Gently press your right thumb against your right nostril to close it. Inhale deeply through your left nostril, then hold your breath briefly. Switch by using your right ring finger to close the left nostril. Release your thumb and exhale slowly through the right nostril. Pause. Keep your hand in place and now inhale through the right nostril. Pause briefly again. Close this nostril with your thumb, open the left nostril, and exhale. This completes one full cycle of alternate nostril breathing.",
};

const meditationTypes = {
    "Mindfulness Meditation" : "Mindfulness meditation, deeply rooted in Buddhist traditions, stands as one of the most extensively studied and practiced forms of meditation in Western culture. During mindfulness meditation, the focus is on gently acknowledging your thoughts as they drift across the landscape of your mind. The key is to engage in observation without judgment, without attaching to or getting entangled in these thoughts. It’s about noticing and recognizing patterns as they emerge. This method is a blend of focus and open awareness. It can be beneficial to center your attention on a specific object or the rhythm of your breathing. As you do this, you become an observer of the sensations in your body, the flow of your thoughts, and the emotions you experience. Mindfulness meditation is particularly suitable for those who are navigating the path of meditation on their own, as it doesn’t necessarily require the guidance of a teacher and can be effectively practiced solo.",
    "Spiritual Meditation" : "Spiritual meditation is a cornerstone across various religions and spiritual paths worldwide. This form of meditation encompasses a wide array of practices, each unique to its respective spiritual or religious tradition. Many meditation techniques mentioned in this article can fall under the umbrella of spiritual meditation. A 2017 research study highlights that spiritual meditation aims at nurturing a profound understanding and connection with a higher spiritual realm or power. Some notable examples include Christian Contemplative Prayer, the Sufi practice of Dhikr, which involves the remembrance of God, and Jewish Kabbalistic methods. One can engage in spiritual meditation either in the tranquility of one's home or within the sacred space of a place of worship. It is especially enriching for individuals seeking spiritual deepening and a stronger connection with a transcendent force or presence.",
    "Focused Meditation" : "Focused meditation is a practice that harnesses concentration through any of the five senses. This technique allows for focusing on internal elements, such as the rhythm of your breathing, or incorporating external aids to assist in maintaining focus. While the concept of focused meditation might seem straightforward, maintaining concentration can be challenging for beginners, often finding it hard to stay focused for extended periods initially. Should you find your mind wandering, gently guide it back to the chosen focus point. This process of returning to focus is part of the practice. Focused meditation is particularly effective for those looking to enhance their concentration and attention skills.",
    "Movement Meditation" : "While yoga often comes to mind first when discussing movement meditation, this dynamic practice can encompass a variety of activities, including: Walking meditation, engaging in gardening and other forms of mindful movement. Movement meditation is a vibrant form of meditation where each motion steers you towards a deeper communion with your body and the immediate present. This type of meditation is particularly suited for those who find solace in activity and wish to cultivate a heightened sense of bodily awareness.",
    "Mantra Meditation" : "Mantra meditation, a key element in both Hindu and Buddhist teachings, employs the use of repetitive sounds or phrases to clear and calm the mind. A classic example of a mantra is the resonant om. The mantra can be articulated loudly or whispered softly. As you engage in this chant, you gradually become more alert and in sync with your surroundings, paving the way to deeper levels of consciousness. Many find mantra meditation appealing because it offers a tangible focus - a word or sound - which some find easier to concentrate on than their breathing. The physical sensation of the mantra's vibration can also be a grounding and centering experience. This practice is particularly beneficial for those who prefer auditory stimulation and rhythmic repetition over silence.",
    "Loving-Kindness Meditation" : "Loving-kindness meditation is a heartfelt practice designed to enhance sentiments of empathy, benevolence, and self-acceptance, as well as to extend these feelings towards others. The practice usually starts with cultivating an openness to absorb love and positive energy from those around you. Subsequently, it involves directing thoughts of goodwill and care towards family, friends, acquaintances, and ultimately, all beings. Given its emphasis on fostering a compassionate and forgiving outlook, this meditation form is particularly beneficial for individuals grappling with feelings of anger or resentment.",
}

const MeditationAdvice = () => {
    document.body.style.backgroundColor = "#A5D8E1";
    const [selectedEmotion, setSelectedEmotion] = useState('Beginner');

    const handleEmotionChange = (event) => {
        setSelectedEmotion(event.target.value);
    };

    return (
        <div>
            <p>Select how you're feeling to get a tailored breathing exercise.</p>

            <div className="select">
                <select onChange={handleEmotionChange} value={selectedEmotion}>
                    <option value="">Select Your Emotion</option>
                    {Object.keys(breathingExercises).map(emotion => (
                        <option key={emotion} value={emotion}>{emotion}</option>
                    ))}
                </select>
            </div>

            <div className="breathing-exercise">
                <p>{breathingExercises[selectedEmotion]}</p>
            </div>
        </div>
    );
};

export default MeditationAdvice;