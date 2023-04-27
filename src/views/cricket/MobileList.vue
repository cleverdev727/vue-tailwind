<template>
  <div>
    <MobileAccordion
      :class="'mb-[10px]'"
      :type="'cricket'"
      :num="10"
      :matchRows="cricketMatchRows"
    />
    <MobileAccordion
      :class="'mb-[10px]'"
      :type="'soccer'"
      :num="10"
      :matchRows="soccerMatchRows"
    />
    <MobileAccordion
      :type="'tennis'"
      :num="10"
      :matchRows="tennisMatchRows"
    />
  </div>
</template>

<script>
import MobileAccordion from '@/components/MobileAccordion.vue';
export default {
  name: "mobile-cricket-list-view",
  components: {
    MobileAccordion
  },
  data: function() {
    return {
      cricketMatchRows: [
        {
          isPlaying: true,
          countries: ['india', 'pakistan'],
          name: 'ICC World Cricket League Matches',
          points: [
            [1.69, '1.69K', true],
            [1.7, '1.74K', false]
          ]
        },
        {
          isPlaying: true,
          countries: ['india', 'pakistan'],
          name: 'ICC World Cricket League Matches',
          points: [
            [1.69, '1.69K', true],
            [1.7, '1.74K', false]
          ]
        },
        {
          isPlaying: true,
          countries: ['india', 'pakistan'],
          name: 'ICC World Cricket League Matches',
          points: [
            [1.69, '1.69K', true],
            [1.7, '1.74K', false]
          ]
        },
        {
          isPlaying: true,
          countries: ['india', 'pakistan'],
          name: 'ICC World Cricket League Matches',
          points: [
            [1.69, '1.69K', true],
            [1.7, '1.74K', false]
          ]
        },
        {
          isPlaying: true,
          countries: ['india', 'pakistan'],
          name: 'ICC World Cricket League Matches',
          points: [
            [1.69, '1.69K', true],
            [1.7, '1.74K', false]
          ]
        },
        {
          isPlaying: true,
          countries: ['india', 'pakistan'],
          name: 'ICC World Cricket League Matches',
          points: [
            [1.69, '1.69K', true],
            [1.7, '1.74K', false]
          ]
        },
        {
          isPlaying: true,
          countries: ['india', 'pakistan'],
          name: 'ICC World Cricket League Matches',
          points: [
            [1.69, '1.69K', true],
            [1.7, '1.74K', false]
          ]
        },
        {
          isPlaying: true,
          countries: ['india', 'pakistan'],
          name: 'ICC World Cricket League Matches',
          points: [
            [1.69, '1.69K', true],
            [1.7, '1.74K', false]
          ]
        },
        {
          isPlaying: true,
          countries: ['india', 'pakistan'],
          name: 'ICC World Cricket League Matches',
          points: [
            [1.69, '1.69K', true],
            [1.7, '1.74K', false]
          ]
        },
        {
          isPlaying: true,
          countries: ['india', 'pakistan'],
          name: 'ICC World Cricket League Matches',
          points: [
            [1.69, '1.69K', true],
            [1.7, '1.74K', false]
          ]
        },
      ],
      soccerMatchRows: [
        {
          isPlaying: true,
          countries: ['india', 'pakistan'],
          name: 'ICC World Cricket League Matches',
          points: [
            [1.69, '1.69K', true],
            [1.7, '1.74K', false]
          ]
        },
        {
          isPlaying: true,
          countries: ['india', 'pakistan'],
          name: 'ICC World Cricket League Matches',
          points: [
            [1.69, '1.69K', true],
            [1.7, '1.74K', false]
          ]
        },
        {
          isPlaying: true,
          countries: ['india', 'pakistan'],
          name: 'ICC World Cricket League Matches',
          points: [
            [1.69, '1.69K', true],
            [1.7, '1.74K', false]
          ]
        },
      ],
      tennisMatchRows: [
        {
          isPlaying: true,
          countries: ['india', 'pakistan'],
          name: 'ICC World Cricket League Matches',
          points: [
            [1.69, '1.69K', true],
            [1.7, '1.74K', false]
          ]
        },
        {
          isPlaying: true,
          countries: ['india', 'pakistan'],
          name: 'ICC World Cricket League Matches',
          points: [
            [1.69, '1.69K', true],
            [1.7, '1.74K', false]
          ]
        },
        {
          isPlaying: true,
          countries: ['india', 'pakistan'],
          name: 'ICC World Cricket League Matches',
          points: [
            [1.69, '1.69K', true],
            [1.7, '1.74K', false]
          ]
        },
      ],
    };
  },
};
</script>