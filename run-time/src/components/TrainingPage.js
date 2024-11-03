// src/components/TrainingPage.js
import React from 'react';
import TrainingCard from './TrainingCard';
import './TrainingPage.css';
import walkImg from '../assets/images/walk.jpg';
import run5kImg from '../assets/images/5k.jpg';
import statsImg from '../assets/images/stats.jpg';
import winImg from '../assets/images/win.jpg';
import trackImg from '../assets/images/train.jpg';

const TrainingPage = () => (
  <div>
    <section className="training-section">
      <h2>Beginner's 5K Plan</h2>
      <div className="training-grid">
        <TrainingCard
          week="Week 1-2"
          image={walkImg}
          description="Focus on building a solid foundation. Start with a mix of walking and running intervals. Each session involves 1 minute of running followed by 2 minutes of walking. Aim for 20-30 minutes per workout, 3-4 times per week."
        />
        <TrainingCard
          week="Week 3-4"
          image={run5kImg}
          description="Increase your running intervals to 2 minutes of running followed by 1 minute of walking. You’ll slowly decrease your walking time and build endurance. Stick to 3-4 sessions per week, keeping your workouts around 30 minutes."
        />
        <TrainingCard
          week="Week 5"
          image={statsImg}
          description="You’ll begin running for longer stretches of time—try 3 minutes of running followed by 1 minute of walking for 30 minutes total. You should feel stronger and more confident now."
        />
        <TrainingCard
          week="Week 6"
          image={winImg}
          description="The final week is all about pushing towards your 5K distance! Try running for 5-minute intervals with minimal walking in between. By the end of the week, aim for a continuous run without stopping and you'll be on your way to completing your first 5k!"
        />
      </div>
    </section>
    <section className="tips-section">
      <h2>Tips for Training</h2>
      <p>Training is the foundation of success for runners, whether you're preparing for your first 5K or tackling a marathon. A well-structured training plan is essential to build endurance, strength, and speed over time. Key elements of a balanced plan include a mix of long-distance runs to improve stamina, interval training to enhance speed, and strength training to prevent injuries. Starting slow and gradually increasing your mileage is crucial to avoiding burnout and injury, allowing your body to adapt to the physical demands of running.</p>
      <p>Consistency is another cornerstone of effective training. Developing a regular routine, even with shorter runs, helps build a habit and enhances performance over time. Incorporating cross-training, such as cycling or swimming, can also benefit runners by working different muscle groups and improving overall fitness without overstraining the legs. Rest days are just as important as training days, giving the body time to recover, rebuild muscle, and prevent injuries caused by overtraining.</p>
      <p>Lastly, proper fueling and hydration play a key role in training for runners. It’s important to maintain a balanced diet rich in carbohydrates for energy, protein for muscle repair, and healthy fats for long-term endurance. Staying hydrated throughout training helps prevent fatigue and improves performance, especially during longer runs. Monitoring your body’s signals, like soreness or fatigue, and adjusting your training plan accordingly is crucial for achieving long-term success as a runner.</p>
    </section>
    <section className="training-image">
      <img src={trackImg} alt="Runner on Track" />
    </section>
  </div>
);

export default TrainingPage;