<template>
  <div class="box">
    <UiSidebar class="m-2">
      <UiSidebarItem to="/" name="Daw" icon="home" />
      <UiSidebarItem to="/proyectos" name="Proyectos" icon="project-diagram" />
      <UiSidebarItem to="/manualIdentidad" name="Manual Identidad" icon="file" />
      <UiSidebarItem to="/sobreMi" name="Sobre Mi" icon="user" />
    </UiSidebar>
  </div>
</template>

<script>
import UiSidebar from "@/components/ui/sidebar/UiSidebar";
import UiSidebarItem from "@/components/ui/sidebar/UiSidebarItem";

export default {
  name: "TheSidebar",
  components: { UiSidebar, UiSidebarItem },
};
</script>
