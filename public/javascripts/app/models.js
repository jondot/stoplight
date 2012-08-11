(function() {
  var Project, ProjectCollection, Projects,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Project = (function(_super) {

    __extends(Project, _super);

    function Project() {
      return Project.__super__.constructor.apply(this, arguments);
    }

    return Project;

  })(Backbone.Model);

  ProjectCollection = (function(_super) {

    __extends(ProjectCollection, _super);

    function ProjectCollection() {
      return ProjectCollection.__super__.constructor.apply(this, arguments);
    }

    ProjectCollection.prototype.model = Project;

    ProjectCollection.prototype.url = '/projects.json';

    return ProjectCollection;

  })(Backbone.Collection);

  Projects = new ProjectCollection;

  Projects.comparator = function(p) {
    return p.get('name');
  };

  this.Projects = Projects;

}).call(this);
