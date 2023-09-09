import { style, animate, trigger, transition, state, keyframes } from '@angular/animations';

export const inOutAnimation = trigger(
  'inOutAnimation',
[ state('open', style({
 height: '94vh',
 opacity: 1,
})),
state('closed', style({
 height: '0',
 opacity: 0,
 margin:'0px',
})),
transition('* => closed', [
 animate('0.2s')
]),
transition('* => open', [
 animate('0.2s')
]),]
);
export const showHideAnimation=trigger("showHideAnimation", [
  state("in", style({ opacity: 1 })),
  transition(":enter", [
    animate(
      100,
      keyframes([
        style({ opacity: 0, offset: 0 }),
        style({ opacity: 0.25, offset: 0.25 }),
        style({ opacity: 0.5, offset: 0.5 }),
        style({ opacity: 0.75, offset: 0.75 }),
        style({ opacity: 1, offset: 1 }),
      ])
    )
  ]),
  transition(":leave", [
    animate(
      100,
      keyframes([
        style({ opacity: 1, offset: 0 }),
        style({ opacity: 0.75, offset: 0.25 }),
        style({ opacity: 0.5, offset: 0.5 }),
        style({ opacity: 0.25, offset: 0.75 }),
        style({ opacity: 0, offset: 1 }),
      ])
    )
  ])
])
