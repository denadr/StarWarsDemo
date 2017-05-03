"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var StarWarsService_1 = require("./StarWarsService");
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
var StarshipsService = (function (_super) {
    __extends(StarshipsService, _super);
    function StarshipsService(_http) {
        var _this = _super.call(this, _http) || this;
        _this._http = _http;
        return _this;
    }
    StarshipsService.prototype.get = function () {
        return _super.prototype.getFrom.call(this, 'starships/');
    };
    return StarshipsService;
}(StarWarsService_1.StarWarsService));
StarshipsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], StarshipsService);
exports.StarshipsService = StarshipsService;
//# sourceMappingURL=StarshipsService.js.map