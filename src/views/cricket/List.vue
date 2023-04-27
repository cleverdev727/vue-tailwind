<template>
  <div>
    <Accordion
      :class="'mb-5'"
      :type="'cricket'"
      :scores="[1,2]"
      :num="10"
      :matchRows="cricketMatchRows"
    />
    <Accordion
      :class="'mb-5'"
      :type="'soccer'"
      :scores="[1,2]"
      :num="10"
      :matchRows="soccerMatchRows"
    />
    <Accordion
      :type="'tennis'"
      :scores="[1,2]"
      :num="10"
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
          countries: ['india', 'pakistan'],
          name: 'ICC World Cricket League Matches',
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
          countries: ['india', 'pakistan'],
          name: 'ICC World Cricket League Matches',
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
          countries: ['india', 'pakistan'],
          name: 'ICC World Cricket League Matches',
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
          countries: ['india', 'pakistan'],
          name: 'ICC World Cricket League Matches',
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
          countries: ['india', 'pakistan'],
          name: 'ICC World Cricket League Matches',
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
          countries: ['india', 'pakistan'],
          name: 'ICC World Cricket League Matches',
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
          countries: ['india', 'pakistan'],
          name: 'ICC World Cricket League Matches',
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
          countries: ['india', 'pakistan'],
          name: 'ICC World Cricket League Matches',
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
          countries: ['india', 'pakistan'],
          name: 'ICC World Cricket League Matches',
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
      tennisMatchRows: [
        {
          isPlaying: true,
          date: 'Today',
          time: '08:43 PM',
          countries: ['india', 'pakistan'],
          name: 'ICC World Cricket League Matches',
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
          countries: ['india', 'pakistan'],
          name: 'ICC World Cricket League Matches',
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
          countries: ['india', 'pakistan'],
          name: 'ICC World Cricket League Matches',
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
    };
  },
};
</script>