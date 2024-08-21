import Alpine from '@alpinejs/csp';
import SwipeListener from 'swipe-listener';

const mobileStyle = 'mobile-hidden';

Alpine.data('schedule', () => ({
    active: null,
    activeEventDetails: null,
    init() {
        this.$root.querySelectorAll('.schedule-row .row-container').forEach(event => SwipeListener(event))
        this.$root.querySelectorAll('.schedule-row .schedule-event:nth-child(n+2)').forEach(row => {
            row.classList.add(mobileStyle);
        });
    },
    swipeRow(ev) {
        var directions = ev.detail.directions;
        var rowEvents = Array.from(this.$el.querySelectorAll('.schedule-event'));
        var currentIndex = rowEvents.findIndex(ev => !ev.classList.contains(mobileStyle));
        var shift = directions.left ? 1 : directions.right ? -1 : 0;
        if (rowEvents.length > 1 && currentIndex >= 0 && shift != 0) {
            var nextIndex = currentIndex + shift;
            if (!!rowEvents[nextIndex]) {
                this.hideEvent();
                rowEvents.forEach(event => event.classList.add(mobileStyle));
                rowEvents[nextIndex].classList.remove(mobileStyle);
            }
        }
    },
    focusMe() {
        this.hideEvent();
        var elWidth = Number(getComputedStyle(this.$el).width.replace('px', '')) ?? 0;
        if ((elWidth > 30) && !this.$el.classList.contains('background-grey')) {
            this.setActive();
        }
        if (this.$el.classList.contains(mobileStyle)) {
            let scheduleRow = this.$el.closest('.schedule-row')
            scheduleRow.querySelectorAll('.schedule-event').forEach(ev => ev.classList.add(mobileStyle));
            this.$el.classList.remove(mobileStyle);
        }
    },
    showEvent() {
        if (!!this.active) {
            this.activeEventDetails.innerHTML = '';
        }
        this.setActive();
    },
    hideEvent() {
        this.$root.querySelectorAll('.is-active').forEach(active => active.classList.remove('is-active'));
        this.$root.querySelectorAll('.event-details').forEach(details => details.innerHTML = '');
    },
    setActive() {
        this.hideEvent();
        var newActive = this.$el;
        if (this.active !== newActive) {
            this.active = newActive;
            this.activeEventDetails = this.$el.closest('.schedule-row').querySelector('.event-details');
            this.active.classList.add('is-active');
            this.activeEventDetails.innerHTML = this._eventDetailsHtml();
            this.activeEventDetails.scrollIntoView();
        }
        else {
            this.active = null;
        }
    },
    _getClass(className) {
        return this.active.querySelector('.' + className).innerHTML;
    },
    _eventDetailsHtml() {
        var backgroundColor = getComputedStyle(this.active.querySelector('.bg')).backgroundColor;
        backgroundColor = backgroundColor.replace(')', ', 0.5)');
        var speakers = this._getClass('speaker').split('|');
        var companies = this._getClass('company').split('|');
        var speakerStr = speakers.map((speaker, i) => `<div class="divided-text">
                <span class="name">${speaker}</span>
                <span class="position-company">${companies[i] ?? ''}</span>
            </div>`).join(' ');
        return `
            <div class="event-info" style="background-color: ${backgroundColor};">
                <div class="speaker">
                    <div class="speaker-img">${this._getClass('speaker-img')}</div>
                    ${speakerStr}
                </div>
                <div class="event-info-text">
                    <div class="divided-text">
                        <span class="time">${this._getClass('time')} Uhr</span>
                        <span class="room">${this._getClass('room')}</span>
                    </div>
                    <div class="title">${this._getClass('title')}</div>
                    <div class="text">${this._getClass('description')}</div>
                </div>
            </div>`;
    }
}));