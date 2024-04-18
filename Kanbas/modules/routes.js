import * as dao from "./dao.js";
function ModuleRoutes(app) {

  const findModulesByCourse = async (req, res) => {
    const { cid } = req.params;
    const modules = await dao.findModulesByCourse(cid);
    res.json(modules);
  };

  const createModule = async (req, res) => {
    const newModule = {... req.body, course: req.params.cid};
    const module = await dao.createModule(newModule); 
    res.json(module);
  };

  const deleteModule = async (req, res) => {
    console.log(req.params.mid);
    const status = await dao.deleteModule(req.params.mid);
    res.json(status);
  };

  const updateModule = async (req, res) => {
    const { mid } = req.params;
    const status = await dao.updateModule(mid, req.body); 
    res.json(status);
  };

  app.get("/api/courses/:cid/modules", findModulesByCourse);

  app.post("/api/courses/:cid/modules", createModule);

  app.delete("/api/modules/:mid",deleteModule);

  app.put("/api/modules/:mid", updateModule);

}
export default ModuleRoutes;