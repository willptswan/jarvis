// Sheet
exports.sheet = () => {

	return [
		{
			title: "Control",
			items: [
				{
					title: "Conditionals",
					values: [
						"if",
						"else",
						"elseif",
						"endif",
						"break"
					]
				},
				{
					title: "Loops",
					values: [
						"foreach",
						"endforeach",
						"while",
						"endwhile",
						"break"
					]
				},
				{
					title: "Functions",
					values: [
						"endfunction",
						"endmacro",
						"function",
						"macro",
						"return",
						"break"
					]
				}
			]
		},
		{
			title: "Targets",
			items: [
				{
					title: "Targets",
					values: [
						"add_compile_options",
						"add_custom_command",
						"add_custom_target",
						"add_definitions",
						"add_dependencies",
						"add_executable",
						"add_library",
						"add_subdirectory",
						"add_test",
						"configure_file",
						"get_cmake_property",
						"get_directory_property",
						"get_filename_component",
						"get_property",
						"get_source_file_property",
						"get_target_property",
						"get_test_property",
						"install",
						"set_directory_properties",
						"set_property",
						"set_source_files_properties",
						"set_target_properties",
						"set_tests_properties",
						"target_compile_definitions",
						"target_compile_options",
						"target_include_directories",
						"target_link_libraries"
					]
				}
			]
		},
		{
			title: "Locating Resources",
			items: [
				{
					title: "Locating Resources",
					values: [
						"find_file",
						"find_library",
						"find_package",
						"find_path",
						"find_program",
						"include_directories",
						"include_external_msproject",
						"include_regular_expression"
					]
				}
			]
		},
		{
			title: "Utilities",
			items: [
				{
					title: "Utilities",
					values: [
						"define_property",
						"file",
						"list",
						"mark_as_advanced",
						"math",
						"message",
						"option",
						"separate_arguments",
						"set",
						"string",
						"unset"
					]
				}
			]
		},
		{
			title: "Other",
			items: [
				{
					title: "Other",
					values: [
						"aux_source_directory",
						"build_command",
						"cmake_host_system_information",
						"cmake_minimum_required",
						"cmake_policy",
						"create_test_sourcelist",
						"enable_language",
						"enable_testing",
						"execute_process",
						"export",
						"fltk_wrap_ui",
						"include",
						"link_directories",
						"load_cache",
						"load_command",
						"project",
						"qt_wrap_cpp",
						"qt_wrap_ui",
						"remove_definitions",
						"site_name",
						"source_group",
						"try_compile",
						"try_run",
						"variable_watch",
					]
				}
			]
		}
	];
};
