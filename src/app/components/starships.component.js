"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var StarshipsService_1 = require("../services/StarshipsService");
var StarshipsComponent = (function () {
    function StarshipsComponent(_service) {
        this._service = _service;
    }
    StarshipsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._service.get().subscribe(function (starships) { return _this.starships = starships; });
    };
    return StarshipsComponent;
}());
StarshipsComponent = __decorate([
    core_1.Component({
        selector: 'star-wars-starships',
        templateUrl: './starships.component.html'
    }),
    __metadata("design:paramtypes", [StarshipsService_1.StarshipsService])
], StarshipsComponent);
exports.StarshipsComponent = StarshipsComponent;
//# sourceMappingURL=starships.component.js.map