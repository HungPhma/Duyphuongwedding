import React from 'react'
import './story.css'
import pic1 from '../assets/duyphuong2.jpg'
import pic2 from '../assets/duyphuong3.jpg'
import pic3 from '../assets/duyphuong4.jpg'
import pic4 from '../assets/duyphuong5.jpg'
import fin1 from '../assets/fin.jpg'
import fin2 from '../assets/fin2.jpg'
function Story() {
  return (
    <div className='Our-story' id='Story'>
        <div className='love-title'>Our Love Story</div>
        <div className='love-title-2'>The One That Wasn't Supposed to Happen (But Did Anyway)</div>
        <div className='story-p'>
            <div className='story-p-section1'>
                <div className='story-p-section1-1'>
                    <h1> Need to fix this section </h1>
                    <p>
                        Long before Duy and Phuong ever locked eyes, fate was already pulling some serious strings—through our parents, of course! Their friend group was so tight that both sets of parents loved joking about being “in-laws” someday, mostly because Phuong has an older sister. They’d tease endlessly, but let’s be honest: no one actually thought it’d involve the baby of the family and the guy eight years older!
                        When people ask how we met, especially eyeing that not-so-common age gap among our friends, we usually grin and say, “Oh, we weren’t supposed to end up together—it all started with a dramatic love triangle!” (Spoiler: The “triangle” was just parental matchmaking dreams gone wild.)
                    </p>
                    <p>Our official first meeting? Classic family trip vibes. Duy came to Vietnam with his parents, and there was middle-school-aged Phuong, hanging out with the other kids in the group. Back then, it was pure big-brother-little-sister energy—think tag games and zero romance.</p>
                    <p>Fast-forward years later: Phuong heads to the US for studies, and suddenly we’re hanging out more. Texts turn into late-night chats, hangouts become can’t-wait-to-see-you-again plans. By the end of 2019, what had to happen… well, happened. We started dating! (Cue the parental “I told you so” celebrations.)</p>
                    <p>That eight-year gap? No joke. Our mindsets crashed like bumper cars—countless debates, eye-rolls, and “you’re so immature” moments, per Duy of course. We clashed, rejoined, and repeated more times than we can count. But somehow, through all the hilarious chaos, we kept finding our way back to the same path.</p>
                    <p>Since becoming a couple, we’ve discovered our absolute favorite thing: traveling! We loooove hitting the open road for epic road trips, blasting playlists, and turning every drive into an adventure filled with snacks, silly sing-alongs, and those deep conversations that make the miles fly by.</p>
                </div>            
                <div className='couple-pic'>
                    <img src={pic3} loading='eager' fetchpriority="high" as="image" alt='Duy and Phuong Picture' />
                    <img src={pic2} loading='eager' fetchpriority="high" as="image" alt='Duy and Phuong Picture' />
                    <img className='left-pic' src={pic1} loading='eager' fetchpriority="high" as="image" alt='Duy and Phuong Picture' />
                    <img className='right-pic' src={pic4} loading='eager' fetchpriority="high" as="image" alt='Duy and Phuong Picture' />
                </div>
            </div>
            <div className='story-p-section1 story-p-section2'>
                <div className='fin-pic'>
                        <img className='fin-left' src={fin2} loading='eager' fetchPriority='high' as="image" alt='Duy and Phuong cat'/>
                        <img className='fin-right' src={fin1} loading='eager' fetchPriority='high' as="image" alt='Duy and Phuong cat'/>
                </div>
                <div className='story-p-section2-2'>
                    <p>
                        And no story of ours would be complete without mentioning our furry overlord: our cute little boy named Fin! He’s the third wheel who steals the show—demanding cuddles, judging our packing skills before trips, and making our home feel even cozier.
                    </p>
                </div>
            </div>
            <p>
                In the end, our story turned into a real-life fairytale—one with plot twists, laughter, and a whole lot of stubborn love. We got engaged in August 2025, and now, after six and a half years of adventures, we’re thrilled to announce: we’re finally getting married!
                Thank you for being part of our happily ever after.
            </p>
        </div>
    </div>
  )
}

export default Story