<template>
  <div>
    <Accordion
      :bottomFlag="true"
      :avatar="'cricket.svg'"
      :alt="'Cricket'"
      :title="'CRICKET (10)'"
      :score1="1"
      :score2="2"
      :matchRows="cricketMatchRows"
    />
    <Accordion
      :bottomFlag="true"
      :avatar="'soccer.svg'"
      :alt="'Soccer'"
      :title="'SOCCER (10)'"
      :score1="1"
      :score2="2"
      :matchRows="soccerMatchRows"
    />
    <Accordion
      :bottomFlag="false"
      :avatar="'tennis.svg'"
      :alt="'Tennis'"
      :title="'TENNIS (10)'"
      :score1="1"
      :score2="2"
      :matchRows="tennisMatchRows"
    />
  </div>
</template>

<script>
import Accordion from '@/components/Accordion.vue';
export default {
  name: "cricket-list-view",
  components: {
    Accordion
  },
  data: function() {
    return {
      cricketMatchRows: [
        {
          isPlaying: true,
          date: 'Today',
          time: '08:43 PM',
          country1: 'India',
          avatar1: 'india.svg',
          country2: 'Pakishtan',
          avatar2: 'india.svg',
          muteText: 'ICC World Cricket League Matches',
          points: [
            [1.69, '1.69K', true],
            [1.7, '1.74K', false],
            [1.69, '1.69K', true],
            [1.7, '1.74K', false],
            [1.69, '1.69K', true],
            [1.7, '1.74K', false]
          ]
        },
        {
          isPlaying: true,
          date: 'Today',
          time: '08:43 PM',
          country1: 'India',
          avatar1: 'india.svg',
          country2: 'Pakishtan',
          avatar2: 'india.svg',
          muteText: 'ICC World Cricket League Matches',
          points: [
            [1.69, '1.69K', true],
            [1.7, '1.74K', false],
            [1.69, '1.69K', true],
            [1.7, '1.74K', false],
            [1.69, '1.69K', true],
            [1.7, '1.74K', false]
          ]
        },
        {
          isPlaying: true,
          date: 'Today',
          time: '08:43 PM',
          country1: 'India',
          avatar1: 'india.svg',
          country2: 'Pakishtan',
          avatar2: 'india.svg',
          muteText: 'ICC World Cricket League Matches',
          points: [
            [1.69, '1.69K', true],
            [1.7, '1.74K', false],
            [1.69, '1.69K', true],
            [1.7, '1.74K', false],
            [1.69, '1.69K', true],
            [1.7, '1.74K', false]
          ]
        },
        {
          isPlaying: true,
          date: 'Today',
          time: '08:43 PM',
          country1: 'India',
          avatar1: 'india.svg',
          country2: 'Pakishtan',
          avatar2: 'india.svg',
          muteText: 'ICC World Cricket League Matches',
          points: [
            [1.69, '1.69K', true],
            [1.7, '1.74K', false],
            [1.69, '1.69K', true],
            [1.7, '1.74K', false],
            [1.69, '1.69K', true],
            [1.7, '1.74K', false]
          ]
        },
        {
          isPlaying: true,
          date: 'Today',
          time: '08:43 PM',
          country1: 'India',
          avatar1: 'india.svg',
          country2: 'Pakishtan',
          avatar2: 'india.svg',
          muteText: 'ICC World Cricket League Matches',
          points: [
            [1.69, '1.69K', true],
            [1.7, '1.74K', false],
            [1.69, '1.69K', true],
            [1.7, '1.74K', false],
            [1.69, '1.69K', true],
            [1.7, '1.74K', false]
          ]
        },
        {
          isPlaying: true,
          date: 'Today',
          time: '08:43 PM',
          country1: 'India',
          avatar1: 'india.svg',
          country2: 'Pakishtan',
          avatar2: 'india.svg',
          muteText: 'ICC World Cricket League Matches',
          points: [
            [1.69, '1.69K', true],
            [1.7, '1.74K', false],
            [1.69, '1.69K', true],
            [1.7, '1.74K', false],
            [1.69, '1.69K', true],
            [1.7, '1.74K', false]
          ]
        },
      ],
      soccerMatchRows: [
        {
          isPlaying: true,
          date: 'Today',
          time: '08:43 PM',
          country1: 'India',
          avatar1: 'india.svg',
          country2: 'Pakishtan',
          avatar2: 'india.svg',
          muteText: 'ICC World Cricket League Matches',
          points: [
            [1.69, '1.69K', true],
            [1.7, '1.74K', false],
            [1.69, '1.69K', true],
            [1.7, '1.74K', false],
            [1.69, '1.69K', true],
            [1.7, '1.74K', false]
          ]
        },
        {
          isPlaying: true,
          date: 'Today',
          time: '08:43 PM',
          country1: 'India',
          avatar1: 'india.svg',
          country2: 'Pakishtan',
          avatar2: 'india.svg',
          muteText: 'ICC World Cricket League Matches',
          points: [
            [1.69, '1.69K', true],
            [1.7, '1.74K', false],
            [1.69, '1.69K', true],
            [1.7, '1.74K', false],
            [1.69, '1.69K', true],
            [1.7, '1.74K', false]
          ]
        },
        {
          isPlaying: true,
          date: 'Today',
          time: '08:43 PM',
          country1: 'India',
          avatar1: 'india.svg',
          country2: 'Pakishtan',
          avatar2: 'india.svg',
          muteText: 'ICC World Cricket League Matches',
          points: [
            [1.69, '1.69K', true],
            [1.7, '1.74K', false],
            [1.69, '1.69K', true],
            [1.7, '1.74K', false],
            [1.69, '1.69K', true],
            [1.7, '1.74K', false]
          ]
        }
      ],
      tennisMatchRows: [
        {
          isPlaying: true,
          date: 'Today',
          time: '08:43 PM',
          country1: 'India',
          avatar1: 'india.svg',
          country2: 'Pakishtan',
          avatar2: 'india.svg',
          muteText: 'ICC World Cricket League Matches',
          points: [
            [1.69, '1.69K', true],
            [1.7, '1.74K', false],
            [1.69, '1.69K', true],
            [1.7, '1.74K', false],
            [1.69, '1.69K', true],
            [1.7, '1.74K', false]
          ]
        },
        {
          isPlaying: true,
          date: 'Today',
          time: '08:43 PM',
          country1: 'India',
          avatar1: 'india.svg',
          country2: 'Pakishtan',
          avatar2: 'india.svg',
          muteText: 'ICC World Cricket League Matches',
          points: [
            [1.69, '1.69K', true],
            [1.7, '1.74K', false],
            [1.69, '1.69K', true],
            [1.7, '1.74K', false],
            [1.69, '1.69K', true],
            [1.7, '1.74K', false]
          ]
        },
        {
          isPlaying: true,
          date: 'Today',
          time: '08:43 PM',
          country1: 'India',
          avatar1: 'india.svg',
          country2: 'Pakishtan',
          avatar2: 'india.svg',
          muteText: 'ICC World Cricket League Matches',
          points: [
            [1.69, '1.69K', true],
            [1.7, '1.74K', false],
            [1.69, '1.69K', true],
            [1.7, '1.74K', false],
            [1.69, '1.69K', true],
            [1.7, '1.74K', false]
          ]
        }
      ],
    };
  },
};
</script>