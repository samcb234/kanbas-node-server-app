import model from "./model.js";
export const createModule = (module) => {
    delete module._id;
    return model.create(module);
}
export const findAllModules = () => model.find();
export const findModuleById = (moduleId) => model.findById(moduleId);
export const updateModule = (moduleId, module) => model.updateOne({ _id: moduleId }, { $set: module });
export const deleteModule = (moduleId) => model.deleteOne({ _id: moduleId });
export const findModuleByName = (name) => model.findOne({name: name});
export const findModulesByCourse = (course) => model.find({course: course});
export const addLesson = (moduleId, lesson) => model.updateOne({ _id: moduleId }, { $push: { length: lesson } });
export const deleteLesson = (moduleId, lessonId) => model.updateOne({ _id: moduleId }, { $pull: { length: { _id: lessonId } } });
export const updateLesson = (moduleId, lessonId, lesson) => model.updateOne({ _id: moduleId, "length._id": lessonId }, { $set: { "length.$": lesson } });
