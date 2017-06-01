this._zone.onMicrotaskEmpty.subscribe({
    next: function () {
        this._zone.run(function () {
            this.tick();
        });
    }
});
